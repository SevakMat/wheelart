import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  UserData,
  UserResponse,
  UsersResponse,
  ErrorResponse,
  CreateUserHandler,
  GetAllUsersHandler,
  GetUserByIdHandler,
  UpdateUserHandler,
  DeleteUserHandler,
} from "./types";

const prisma = new PrismaClient();

export const createUserHandler: CreateUserHandler = async (
  req: any,
  res: any
) => {
  try {
    const { firstName, lastName, phoneNumber, email, password, role } =
      req.body;

    const createdUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        role,
      },
    });

    res.status(201).json({
      status: "success",
      data: { user: createdUser },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create user",
    });
  }
};

export const getAllUsersHandler: GetAllUsersHandler = async (
  req: any,
  res: any
) => {
  try {
    const allUsers = await prisma.user.findMany();

    res.status(200).json({
      status: "success",
      data: { users: allUsers },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch users",
    });
  }
};

export const getUserByIdHandler: GetUserByIdHandler = async (
  req: any,
  res: any
) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        active: true,
        createdDate: true,
        email: true,
        emailVerified: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        role: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch user",
    });
  }
};

export const updateUserHandler: UpdateUserHandler = async (
  req: any,
  res: any
) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);
    const { firstName, lastName, phoneNumber, email, password, role } =
      req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        role,
      },
    });

    res.status(200).json({
      status: "success",
      data: { user: updatedUser },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to update user",
    });
  }
};

export const deleteUserHandler: DeleteUserHandler = async (
  req: any,
  res: any
) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id, 10);

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete user",
    });
  }
};
