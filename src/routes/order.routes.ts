import express from "express";
import { getAllRimsHandler } from "../controllers/rims.controller";
import {
  createOrderHandler,
  getUserOrdersListHandler,
} from "../controllers/orders.controller";
import { VerifyJWTToken } from "../services/jwt/verifyJWTToken";

const router = express.Router();

// router.use(deserializeUser, requireUser);

router.get("/all", VerifyJWTToken, getAllRimsHandler);

router.post("/create", VerifyJWTToken, createOrderHandler);
router.get("/orders/:id", VerifyJWTToken, getUserOrdersListHandler);

export default router;
