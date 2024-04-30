import { Request, Response, NextFunction } from "express";
import { findUniqueUser, signTokens } from "../../services/user.service";
import AppError from "../../utils/appError";
import { accessTokenCookieOptions, refreshTokenCookieOptions } from "./utils";

export const loginUserHandler = async (
  req: Request,
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

    if (!user || !user.password || password !== user.password) {
      throw new AppError(400, "Invalid email or password");
    }

    // if (
    //   !user ||
    //   (user?.password && !(await bcrypt.compare(password, user?.password)))
    // ) {
    //   return next(new AppError(400, "Invalid email or password"));
    // }

    // Check if user is verified
    // if (!user.emailVerified) {
    //   throw new AppError(
    //     401,
    //     "You are not verified, please verify your email to login"
    //   );
    // }

    // Sign Tokens
    const { access_token, refresh_token } = await signTokens(user);

    setCookies(res, access_token, refresh_token);
    return sendResponse(res, 200, "success", access_token, user);
  } catch (err) {
    next(err);
  }
};

const setCookies = (
  res: Response,
  access_token: string,
  refresh_token: string
) => {
  res.cookie("access_token", access_token, accessTokenCookieOptions);
  res.cookie("refresh_token", refresh_token, refreshTokenCookieOptions);
  res.cookie("logged_in", true, {
    ...accessTokenCookieOptions,
    httpOnly: false,
  });
};

const sendResponse = (
  res: Response,
  status: number,
  statusText: string,
  access_token: string | null,
  user: any | null,
  message?: string
) => {
  const response: any = { status: statusText };
  if (access_token) response.access_token = access_token;
  if (user) response.user = user;
  if (message) response.message = message;
  return res.status(status).json(response);
};
