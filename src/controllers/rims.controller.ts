import { NextFunction, Request, Response } from 'express';
import { findAllRimsService, findRimsByInputArgsService } from '../services/rims.service';
import { FindWheelDetailsByCarService, getCarsInfoByCarsData } from '../services/wheelFitmentAPI.service';
import { CliarsRimsByInputArgs } from './inputs/CliarsRimsByInputArgs';
export const getAllRimsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const rims = await findAllRimsService(
      { id: true, sizeR: true, studHoles: true, pcd: true, centerBore: true }
    );

    res.status(200).status(200).json({
      status: 'success',
      data: {
        rims,
      },
    });
  } catch (err: any) {
    next(err);
  }
};
export const getRimsByInputArgsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const rimsData = CliarsRimsByInputArgs(req.body.where)

    const rims = await findRimsByInputArgsService({
      where: rimsData,
      select: { id: true, sizeR: true, studHoles: true, pcd: true, centerBore: true }
    });

    res.status(200).status(200).json({
      status: 'success',
      data: {
        rims,
      },
    });
  } catch (err: any) {
    next(err);
  }
};


export const getRimsByCarInputArgsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const wheelDetails = await FindWheelDetailsByCarService(req.body.where)

    const rims = await findRimsByInputArgsService({
      where: wheelDetails,
      select: { id: true, sizeR: true, centerBore: true, imageUrl: true, rimModel: true, price: true }
    });

    res.status(200).status(200).json({
      status: 'success',
      data: rims
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllCarsTypesHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const dataFromApi = await getCarsInfoByCarsData("makes")

    res.status(200).status(200).json({
      status: 'success',
      data: dataFromApi,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getModelByCarHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { make } = req.query

    const dataFromApi = await getCarsInfoByCarsData("models", make as string)
    res.status(200).status(200).json({
      status: 'success',
      data: dataFromApi,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getYearByCarHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { make, model } = req.query

    const dataFromApi = await getCarsInfoByCarsData("years", make as string, model as string)
    res.status(200).status(200).json({
      status: 'success',
      data: dataFromApi,
    });
  } catch (err: any) {
    next(err);
  }
};


export const getModificationsByCarHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    const { make, model, year } = req.query

    const dataFromApi = await getCarsInfoByCarsData("modifications", make as string, model as string, year as string)
    res.status(200).status(200).json({
      status: 'success',
      data: dataFromApi,
    });
  } catch (err: any) {
    next(err);
  }
};



