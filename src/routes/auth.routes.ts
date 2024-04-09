import express from "express";
import {
  // forgotPasswordHandler,
  loginUserHandler,
  logoutUserHandler,
  // logoutUserHandler,
  // refreshAccessTokenHandler,
  registerUserHandler,
  // resetPasswordHandler,
  // verifyEmailHandler,
} from "../controllers/auth.controller";

import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";

import {
  forgotPasswordSchema,
  loginUserSchema,
  registerUserSchema,
  resetPasswordSchema,
  verifyEmailSchema,
} from "../schemas/user.schema";
import { UserPaymentHandler } from "../controllers/payment.controler";

const router = express.Router();

router.post("/register", validate(registerUserSchema), registerUserHandler);

router.post("/login", validate(loginUserSchema), loginUserHandler);

// router.get('/refresh', refreshAccessTokenHandler);

// router.get(
//   '/verifyemail/:verificationCode',
//   validate(verifyEmailSchema),
//   verifyEmailHandler
// );

// router.get('/logout', deserializeUser, requireUser, logoutUserHandler);
router.post("/logout", logoutUserHandler);

router.post("/create-checkout-session", UserPaymentHandler);

// router.post(
//   '/forgotpassword',
//   validate(forgotPasswordSchema),
//   forgotPasswordHandler
// );

// router.patch(
//   '/resetpassword/:resetToken',
//   validate(resetPasswordSchema),
//   resetPasswordHandler
// );

export default router;
