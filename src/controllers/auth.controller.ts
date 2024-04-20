import crypto from "crypto";
import { CookieOptions, NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import {
  ForgotPasswordInput,
  LoginUserInput,
  RegisterUserInput,
  ResetPasswordInput,
  VerifyEmailInput,
} from "../schemas/user.schema";
import {
  createUser,
  findUniqueUser,
  // findUser,
  signTokens,
  transformToLineItems,
  // updateUser,
} from "../services/user.service";
import config from "config";
import AppError from "../utils/appError";
import { ClearCreateUserInputArgs } from "./inputs/ClearCreateUserInputArgs";
import Stripe from "stripe";
import { ClearUserGoogleInputArgs } from "./inputs/ClearUserGoogleInputArgs";
import { PrismaClient } from "@prisma/client";
import { sendEmail } from "../emailService/emailService";
import { decrypt, encrypt } from "../emailService/hashing";

// import redisClient from '../utils/connectRedis';
// import { signJwt, verifyJwt } from '../utils/jwt';
// import Email from '../utils/email';

const cookiesOptions: CookieOptions = {
  httpOnly: true,
  sameSite: "lax",
};
const prisma = new PrismaClient();

if (process.env.NODE_ENV === "production") cookiesOptions.secure = true;

const accessTokenCookieOptions: CookieOptions = {
  ...cookiesOptions,
  expires: new Date(Date.now() + 15 * 60 * 1000),
  maxAge: 15 * 60 * 1000,
};

const refreshTokenCookieOptions: CookieOptions = {
  ...cookiesOptions,
  expires: new Date(Date.now() + 60 * 60 * 1000),
  maxAge: 60 * 60 * 1000,
};

export const registerUserHandler = async (
  // req: Request<{}, {}, RegisterUserInput>,
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 12);

    const verificationCode = encrypt(
      req.body.email,
      process.env.HASH_SECRET_KEY as string
    );

    const clearUserData = ClearCreateUserInputArgs(req.body);

    const existingUser = await findUniqueUser(
      { email: req.body.email.toLowerCase() },
      {
        id: true,
        email: true,
        emailVerified: true,
        password: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        orders: true,
      }
    );

    if (existingUser) {
      res.status(202).json({
        status: "You already have account",
      });
    }

    await createUser({
      ...clearUserData,
      password: hashedPassword,
      verificationCode,
    });

    sendEmail({
      to: req.body.email,
      subject: "Email Verification for Wheel Art",
      text: "Email Verification",
      html: `<p>Please open this link <a href='${process.env.BASE_URL}/email-verification?verification_code=${verificationCode}'>Wheel Art</a></p>`,
    }).catch(console.error);

    res.status(200).json({
      status: "success",
    });
  } catch (err: any) {
    if (err) {
      console.log("errrm", err);

      if (err.code === "P2002") {
        return res.status(404).json({
          status: "fail",
          message: "something happend with registration",
        });
      }
    }
    next(err);
  }
};

export const registerGoogleUserHandler = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const prisma = new PrismaClient();

  try {
    const { email, googleId } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { googleId }],
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        active: true,
        emailVerified: true,
        lastName: true,
        role: true,
        googleId: true,
      },
    });

    if (user) {
      const { access_token, refresh_token } = await signTokens(user);

      res.cookie("access_token", access_token, accessTokenCookieOptions);
      res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
      res.cookie("logged_in", true, {
        ...accessTokenCookieOptions,
        httpOnly: false,
      });

      res.status(200).json({
        status: "success",
        access_token,
        user,
      });
    } else {
      const clearUserGoogleData = ClearUserGoogleInputArgs(req.body);
      const user = await createUser(clearUserGoogleData);

      const { access_token, refresh_token } = await signTokens(user);

      res.cookie("access_token", access_token, accessTokenCookieOptions);
      res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
      res.cookie("logged_in", true, {
        ...accessTokenCookieOptions,
        httpOnly: false,
      });

      res.status(200).json({
        status: "success",
        access_token,
        user,
      });
    }
  } catch (err: any) {
    if (err) {
      console.log("errrm", err);

      if (err.code === "P2002") {
        return res.status(404).json({
          status: "fail",
          message: "something happend with registerGoogleUserHandler",
        });
      }
    }
    next(err);
  }
};

export const loginUserHandler = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await findUniqueUser(
      { email: email.toLowerCase() },
      {
        id: true,
        email: true,
        emailVerified: true,
        password: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        orders: true,
      }
    );

    if (!user) {
      return next(new AppError(400, "Invalid email or password"));
    }

    // Check if user is verified
    if (!user.emailVerified) {
      return next(
        new AppError(
          401,
          "You are not verified, please verify your email to login"
        )
      );
    }

    // const hashedPassword = await bcrypt.hash(req.body.password, 12);

    /////////////////!!!!!!!!!!!!!!!
    if (
      !user ||
      (user?.password && !(await bcrypt.compare(password, user?.password)))
    ) {
      return next(new AppError(400, "Invalid email or password"));
    }

    // Sign Tokens
    const { access_token, refresh_token } = await signTokens(user);

    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    res.status(200).json({
      status: "success",
      access_token,
      user,
    });
  } catch (err: any) {
    next(err);
  }
};

// export const refreshAccessTokenHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const refresh_token = req.cookies.refresh_token;

//     const message = 'Could not refresh access token';

//     if (!refresh_token) {
//       return next(new AppError(403, message));
//     }

//     // Validate refresh token
//     const decoded = verifyJwt<{ sub: string }>(
//       refresh_token,
//       'refreshTokenPublicKey'
//     );

//     if (!decoded) {
//       return next(new AppError(403, message));
//     }

//     // Check if user has a valid session
//     const session = await redisClient.get(decoded.sub);

//     if (!session) {
//       return next(new AppError(403, message));
//     }

//     // Check if user still exist
//     const user = await findUniqueUser({ id: JSON.parse(session).id });

//     if (!user) {
//       return next(new AppError(403, message));
//     }

//     // Sign new access token
//     const access_token = signJwt({ sub: user.id }, 'accessTokenPrivateKey', {
//       expiresIn: `${config.get<number>('accessTokenExpiresIn')}m`,
//     });

//     // 4. Add Cookies
//     res.cookie('access_token', access_token, accessTokenCookieOptions);
//     res.cookie('logged_in', true, {
//       ...accessTokenCookieOptions,
//       httpOnly: false,
//     });

//     // 5. Send response
//     res.status(200).json({
//       status: 'success',
//       access_token,
//     });
//   } catch (err: any) {
//     next(err);
//   }
// };

function logout(res: Response) {
  res.cookie("access_token", "", { maxAge: 1 });
  res.cookie("refresh_token", "", { maxAge: 1 });
  res.cookie("logged_in", "", { maxAge: 1 });
}

export const logoutUserHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // await redisClient.del(res.locals.user.id);
    logout(res);

    res.status(200).json({
      status: "success",
    });
  } catch (err: any) {
    next(err);
  }
};

export const verifyEmailHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const decryptedData = decrypt(
      req.params.verificationCode,
      process.env.HASH_SECRET_KEY as string
    );

    const user = await prisma.user.update({
      where: {
        email: decryptedData,
      },
      data: {
        emailVerified: true,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        active: true,
        emailVerified: true,
        lastName: true,
        role: true,
        googleId: true,
      },
    });

    if (!user) {
      return next(new AppError(401, "Could not verify email"));
    }

    const { access_token, refresh_token } = await signTokens(user);

    res.cookie("access_token", access_token, accessTokenCookieOptions);
    res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
    res.cookie("logged_in", true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    res.status(200).json({
      status: "success",
      access_token,
      user,
    });
  } catch (err: any) {
    if (err.code === "P2025") {
      return res.status(403).json({
        status: "fail",
        message: `Verification code is invalid or user doesn't exist`,
      });
    }
    next(err);
  }
};

// export const forgotPasswordHandler = async (
//   req: Request<
//     Record<string, never>,
//     Record<string, never>,
//     ForgotPasswordInput
//   >,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     // Get the user from the collection
//     const user = await findUser({ email: req.body.email.toLowerCase() });
//     const message =
//       'You will receive a reset email if user with that email exist';
//     if (!user) {
//       return res.status(200).json({
//         status: 'success',
//         message,
//       });
//     }

//     if (!user.verified) {
//       return res.status(403).json({
//         status: 'fail',
//         message: 'Account not verified',
//       });
//     }

//     if (user.provider) {
//       return res.status(403).json({
//         status: 'fail',
//         message:
//           'We found your account. It looks like you registered with a social auth account. Try signing in with social auth.',
//       });
//     }

//     const resetToken = crypto.randomBytes(32).toString('hex');
//     const passwordResetToken = crypto
//       .createHash('sha256')
//       .update(resetToken)
//       .digest('hex');

//     await updateUser(
//       { id: user.id },
//       {
//         passwordResetToken,
//         passwordResetAt: new Date(Date.now() + 10 * 60 * 1000),
//       },
//       { email: true }
//     );

//     try {
//       const url = `${config.get<string>('origin')}/resetpassword/${resetToken}`;
//       await new Email(user, url).sendPasswordResetToken();

//       res.status(200).json({
//         status: 'success',
//         message,
//       });
//     } catch (err: any) {
//       await updateUser(
//         { id: user.id },
//         { passwordResetToken: null, passwordResetAt: null },
//         {}
//       );
//       return res.status(500).json({
//         status: 'error',
//         message: 'There was an error sending email',
//       });
//     }
//   } catch (err: any) {
//     next(err);
//   }
// };

// export const resetPasswordHandler = async (
//   req: Request<
//     ResetPasswordInput['params'],
//     Record<string, never>,
//     ResetPasswordInput['body']
//   >,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     // Get the user from the collection
//     const passwordResetToken = crypto
//       .createHash('sha256')
//       .update(req.params.resetToken)
//       .digest('hex');

//     const user = await findUser({
//       passwordResetToken,
//       passwordResetAt: {
//         gt: new Date(),
//       },
//     });

//     if (!user) {
//       return res.status(403).json({
//         status: 'fail',
//         message: 'Invalid token or token has expired',
//       });
//     }

//     const hashedPassword = await bcrypt.hash(req.body.password, 12);
//     // Change password data
//     await updateUser(
//       {
//         id: user.id,
//       },
//       {
//         password: hashedPassword,
//         passwordResetToken: null,
//         passwordResetAt: null,
//       },
//       { email: true }
//     );

//     logout(res);
//     res.status(200).json({
//       status: 'success',
//       message: 'Password data updated successfully',
//     });
//   } catch (err: any) {
//     next(err);
//   }
// };
