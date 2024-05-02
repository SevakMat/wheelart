import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createOrderHandler = async (req: Request, res: Response) => {
  try {
    const { orderType, itemId, itemCount, price } = req.body;

    const createdOrder = await prisma.order.create({
      data: {
        orderType,
        itemId,
        itemCount,
        price,
      },
    });

    res.status(201).json({
      status: "success",
      data: { order: createdOrder },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create order",
    });
  }
};

export const getUserOrdersListHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    const orderList = await prisma.order.findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
      include: {
        tire: true,
        rims: true,
      },
    });

    res.status(200).json({
      status: "success",
      data: { orderList },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch user orders",
    });
  }
};

export const getAllOrdersHandler = async (req: Request, res: Response) => {
  try {
    const allOrdersWithUserIds = await prisma.order.findMany({
      include: {
        users: {
          select: {
            userId: true,
          },
        },
        tire: {
          select: {
            id: true,
            marka: true,
          },
        },
        rims: {
          select: {
            id: true,
            rimModel: true,
          },
        },
      },
    });
    // console.log(4444, allOrdersWithUserIds);

    const orderList = allOrdersWithUserIds.map((order) => ({
      id: order.id,
      orderType: order.orderType,
      status: order.status,
      price: order.price,
      name:
        order.orderType === "TIRE" ? order.tire?.marka : order.rims?.rimModel,
      itemId: order.orderType === "TIRE" ? order.tire?.id : order.rims?.id,

      itemCount: order.itemCount,
      userId: order.users[0].userId,
      sessionId: order.sessionId,
      createdDate: order.createdDate,
    }));

    // Map the result to create the desired object format
    const allOrders = allOrdersWithUserIds.map((order) => ({
      ...order,
      userId: order.users[0].userId,
    }));

    res.status(200).json({
      status: "success",
      data: { orders: orderList },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch orders",
    });
  }
};

export const getOrderByIdHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderId = parseInt(id, 10);

    const order = await prisma.order.findUnique({
      where: {
        id: orderId,
      },
    });

    if (!order) {
      return res.status(404).json({
        status: "error",
        message: "Order not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { order },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch order",
    });
  }
};

export const updateOrderHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderId = parseInt(id, 10);
    const { orderType, itemId, itemCount, status } = req.body;

    const updatedOrder = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        orderType,
        itemId,
        itemCount,
        status,
      },
    });

    res.status(200).json({
      status: "success",
      data: { order: updatedOrder },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to update order",
    });
  }
};

export const deleteOrderHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const orderId = parseInt(id, 10);

    await prisma.order.delete({
      where: {
        id: orderId,
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete order",
    });
  }
};
