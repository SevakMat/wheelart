import { Request, Response, NextFunction } from "express";
import { decrypt } from "../../emailService/hashing";
import { PrismaClient } from "@prisma/client";
import { accessTokenCookieOptions, refreshTokenCookieOptions } from "./utils";
import { signTokens } from "../../services/user.service";
import AppError from "../../utils/appError";

export const verifyEmailHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const prisma = new PrismaClient();

  try {
    const decryptedData = decrypt(
      req.params.verificationCode,
      process.env.HASH_SECRET_KEY as string
    );

    const user = await prisma.user.update({
      where: { email: decryptedData },
      data: { emailVerified: true },
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
      throw new AppError(401, "Could not verify email");
    }

    const { access_token, refresh_token } = await signTokens(user);

    setCookies(res, access_token, refresh_token);
    return sendResponse(res, 200, "success", access_token, user);
  } catch (err: any) {
    if (err.code === "P2025") {
      return sendResponse(
        res,
        403,
        "fail",
        null,
        null,
        "Verification code is invalid or user doesn't exist"
      );
    }
    next(err);
  } finally {
    await prisma.$disconnect();
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