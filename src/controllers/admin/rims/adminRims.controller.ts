import { PrismaClient, Rims } from '@prisma/client';
import { Request, Response } from 'express';
import {ClearCreateRimDataHelper,ClearUpdateRimDataHelper} from './helpers';

interface RequestWithBody<B> extends Request {
  body: B;
}
interface ResponseWithData<T> extends Response {
  json: (body: T) => this;
}

const prisma = new PrismaClient();

export interface RimData {
  sizeR: number;
  studHoles: number;
  pcd: number;
  centerBore: string;
  rimModel: string;
  width: number;
  color: string;
  gram: number;
  description: string;
  imageUrl: string;
  price: number;
  score: number;
}

export interface RimResponse {
  status: string;
  data: { rim: Rims };
}

export interface RimsResponse {
  status: string;
  data: { rims: Rims[] };
}

export interface ErrorResponse {
  status: string;
  message: string;
}

export const createRimHandler: (
  req: RequestWithBody<RimData>,
  res: ResponseWithData<RimResponse | ErrorResponse>
) => Promise<void> = async (req, res) => {
  try {
    const clearCreateRimData = ClearCreateRimDataHelper(req.body)
    console.log(clearCreateRimData,111);
    
    const createdRim = await prisma.rims.create({
      data: clearCreateRimData
    });

    res.status(201).json({
      status: 'success',
      data: { rim: createdRim },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to create rim',
    });
  }
};

export const getAllRimsHandler: (
  req: Request,
  res: ResponseWithData<RimsResponse | ErrorResponse>
) => Promise<void> = async (req, res) => {
  try {
    console.log(12312312);

    const allRims = await prisma.rims.findMany();


    res.status(200).json({
      status: 'success',
      data: { rims: allRims },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch rims',
    });
  }
};

export const getRimByIdHandler: (
  req: any,
  res: ResponseWithData<RimResponse | ErrorResponse>
) => Promise<void> = async (req, res) => {
  try {
    const { id } = req.params;
    const rimId = parseInt(id, 10);

    const rim = await prisma.rims.findUnique({
      where: {
        id: rimId,
      },
    });

    if (!rim) {
      res.status(404).json({
        status: 'error',
        message: 'Rim not found',
      });
      return; // Ensure function exits after sending response
    }

    res.status(200).json({
      status: 'success',
      data: { rim },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch rim',
    });
  }
};


export const updateRimHandler: (
  req: any & RequestWithBody<RimData>,
  res: ResponseWithData<RimResponse | ErrorResponse>
) => Promise<void> = async (req, res) => {
  try {
    const { id } = req.params;
    const rimId = parseInt(id, 10);
    
    const clearUpdateRimData = ClearUpdateRimDataHelper(req.body)

    const updatedRim = await prisma.rims.update({
      where: {
        id: rimId,
      },
      data: clearUpdateRimData

    });

    res.status(200).json({
      status: 'success',
      data: { rim: updatedRim },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to update rim',
    });
  }
};

export const deleteRimHandler: (
  req: any,
  res: ResponseWithData<void | ErrorResponse>
) => Promise<void> = async (req, res) => {
  try {
    const { id } = req.params;
    const rimId = parseInt(id, 10);

    await prisma.rims.delete({
      where: {
        id: rimId,
      },
    });

    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete rim',
    });
  }
};
