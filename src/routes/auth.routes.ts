import express from "express";

import { validate } from "../middleware/validate";

import {
  loginUserSchema,
  registerUserSchema,
  verifyEmailSchema,
} from "../schemas/user.schema";
import { UserPaymentHandler } from "../controllers/payment.controler";
import { registerUserHandler } from "../controllers/AuthController/registerUserHandler";
import { registerGoogleUserHandler } from "../controllers/AuthController/registerGoogleUserHandler";
import { loginUserHandler } from "../controllers/AuthController/loginUserHandler";
import { verifyEmailHandler } from "../controllers/AuthController/verifyEmailHandler";
import { logoutUserHandler } from "../controllers/AuthController/logoutUserHandler";
import { UpdateUserHandler } from "../controllers/AuthController/updateUserHandler";
import { ForgotPasswordHandler } from "../controllers/AuthController/forgotPasswordHandler";

const router = express.Router();

router.post("/register", validate(registerUserSchema), registerUserHandler);

router.post(
  "/register-google",
  // validate(registerGoogleUserSchema),
  registerGoogleUserHandler
);

router.post("/login", validate(loginUserSchema), loginUserHandler);

router.post(
  "/email-verification/:verificationCode",
  validate(verifyEmailSchema),
  verifyEmailHandler
);

router.post("/logout", logoutUserHandler);

router.post("/create-checkout-session", UserPaymentHandler);

router.post("/forgotpassword", ForgotPasswordHandler);

router.post("/update-user/:userId", UpdateUserHandler);

// petqa me ga ste
export default router;
