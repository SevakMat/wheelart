import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { ClearCreateOrderInputArgs } from "./inputs/ClearCreateOrderInputArgs";

const prisma = new PrismaClient();

export interface OrderType {
  itemId: number;
  type: string;
  count: number;
  status: string;
  price: number;
}

export const createOrderHandler = async (req: Request, res: Response) => {
  try {
    const { orderData, sessionId, id } = req.body;

    const orderCount = await prisma.order.count({
      where: {
        sessionId: sessionId,
      },
    });

    if (orderCount > 0) {
      res.status(200).json({
        status: "You already created orders for this items",
      });
    }

    orderData.map(async (order: OrderType) => {
      const clearData: any = ClearCreateOrderInputArgs(order, sessionId);
      //ste petqa db ic jnjenq et qanaki et parametreri rim kam tire

      const newOrder = await prisma.order.create({
        data: clearData,
      });

      await prisma.orderUser.create({
        data: {
          userId: id,
          orderId: newOrder.id,
        },
      });
      if (clearData.type === "RIM") {
        await prisma.rims.update({
          where: { id: clearData.itemId },
          data: {
            stock: {
              decrement: clearData.itemCount,
            },
          },
        });
      } else {
        await prisma.tire.update({
          where: { id: clearData.itemId },
          data: {
            stock: {
              decrement: clearData.itemCount,
            },
          },
        });
      }
    });

    res.status(200).json({
      status: "success",
      data: {},
    });
  } catch (err: any) {
    res.status(400).json({
      status: "error",
    });
  }
};

export const getUserOrdersListHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const userId = parseInt(id, 10); // Using parseInt

    const userOrders = await prisma.order.findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
      include: {
        tire: {
          select: {
            imageUrl: true,
          },
        },
        rims: {
          select: {
            imageUrl: true,
          },
        },
      },
    });

    const orderList = userOrders.map((order) => ({
      id: order.id,
      orderType: order.orderType,
      status: order.status,
      price: order.price,
      imgUrl:
        order.orderType === "TIRE"
          ? order.tire?.imageUrl
          : order.rims?.imageUrl,
      itemCount: order.itemCount,
    }));

    res.status(200).json({
      status: "success",
      data: { orderList },
    });
  } catch (err: any) {
    res.status(400).json({
      status: "error",
    });
  }
};
