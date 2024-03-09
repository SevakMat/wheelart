import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import { ClearCreateOrderInputArgs } from "./inputs/ClearCreateOrderInputArgs";

const prisma = new PrismaClient();

export interface OrderType {
  itemId: number,
  type: string,
  count: number,
  status: string
}

export const createOrderHandler = async (
  req: Request,
  res: Response,
) => {
  try {

    const { orderData } = req.body
    console.log("req.body",orderData);


    orderData.map(async (order: OrderType) => {
      const clearData: any = ClearCreateOrderInputArgs(order)
      const newOrder = await prisma.order.create({
        data: clearData
      });
      const newOrderUser = await prisma.orderUser.create({
        data: {
          userId: 1,
          orderId: newOrder.id
        }
      })

    })

    res.status(200).json({
      status: 'success',
      data: {
      },
    });


  } catch (err: any) {
    console.log(err);

    res.status(400).json({
      status: 'error',
    });

  }
};
