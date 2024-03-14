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

    const { orderData,id } = req.body

    orderData.map(async (order: OrderType) => {
      const clearData: any = ClearCreateOrderInputArgs(order)
      const newOrder = await prisma.order.create({
        data: clearData
      });
      const newOrderUser = await prisma.orderUser.create({
        data: {
          userId:id,
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

export const getUserOrdersListHandler = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id } = req.params

    const userId = parseInt(id, 10); // Using parseInt

    const orderList = await prisma.order.findMany({
      where: {
        users: {
          some: {
            userId
          }
        }
      },
      include: {
        tire: {
          select: {
            imageUrl: true
          }
        },
        rims: {
          select: {
            imageUrl: true
          }
        }
      }
    });
    console.log("orderList",orderList);
    
    res.status(200).json({
      status: 'success',
      data: { orderList },
    });


  } catch (err: any) {
    res.status(400).json({
      status: 'error',
    });
  }
};