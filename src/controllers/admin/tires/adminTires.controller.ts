import { PrismaClient, Tire } from "@prisma/client";
import { Request, Response } from "express";
import {
  TireData,
  TireResponse,
  TiresResponse,
  ErrorResponse,
  CreateTireHandler,
  GetAllTiresHandler,
  GetTireByIdHandler,
  UpdateTireHandler,
  DeleteTireHandler,
} from "./types";
import { ClearCreateTireDataHelper } from "./helpers";

const prisma = new PrismaClient();

export const createTireHandler: CreateTireHandler = async (req, res) => {
  try {
    const clearCreateTireData = ClearCreateTireDataHelper(req.body);

    const createdTire = await prisma.tire.create({
      data: { ...clearCreateTireData },
    });

    res.status(201).json({
      status: "success",
      data: { tire: createdTire },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to create tire",
    });
  }
};

export const getAllTiresHandler: GetAllTiresHandler = async (req, res) => {
  try {
    const allTires = await prisma.tire.findMany();

    res.status(200).json({
      status: "success",
      data: { tires: allTires },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch tires",
    });
  }
};

export const getTireByIdHandler: GetTireByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const tireId = parseInt(id, 10);

    const tire = await prisma.tire.findUnique({
      where: {
        id: tireId,
      },
    });

    if (!tire) {
      return res.status(404).json({
        status: "error",
        message: "Tire not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: { tire },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch tire",
    });
  }
};

export const updateTireHandler: UpdateTireHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const tireId = parseInt(id, 10);
    const { tireWidth, tireAspectRatio, rimDiameter, marka, stock, imageUrl } =
      req.body;

    const updatedTire = await prisma.tire.update({
      where: {
        id: tireId,
      },
      data: {
        tireWidth,
        tireAspectRatio,
        rimDiameter,
        marka,
        stock,
        imageUrl,
      },
    });

    res.status(200).json({
      status: "success",
      data: { tire: updatedTire },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to update tire",
    });
  }
};

export const deleteTireHandler: DeleteTireHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const tireId = parseInt(id, 10);

    await prisma.tire.delete({
      where: {
        id: tireId,
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to delete tire",
    });
  }
};
