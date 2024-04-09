import Stripe from "stripe";
import { transformToLineItems } from "../services/user.service";
import { Response } from "express";

export const UserPaymentHandler = async (req: any, res: Response) => {
  const baseUrl = process.env.BASE_URL;
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY as string;

  const { filteredOrders } = req.body;

  const stripe = new Stripe(stripeSecretKey);

  const lineItems = transformToLineItems(filteredOrders);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${baseUrl}/user/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/user/payment-failed`,
  });

  res.status(200).json({
    status: "success",
    id: session.id,
  });
};
