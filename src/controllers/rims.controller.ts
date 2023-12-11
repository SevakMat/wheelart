import { NextFunction, Request, Response } from 'express';
import { findAllRimsService, findRimsByInputArgsService } from '../services/rims.service';
import { FindWheelByCarService, GetAllCars, GetModelByCar } from '../services/wheelFitmentAPI.service';
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

    const dataFromApi = await FindWheelByCarService(req.body.where)

    const rims = await findRimsByInputArgsService({
      where: dataFromApi,
      select: { id: true, sizeR: true, studHoles: true, pcd: true, centerBore: true }
    });
    console.log(rims);


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

export const getAllCarsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const dataFromApi = await GetAllCars()
    res.status(200).status(200).json({
      status: 'success',
      data: dataFromApi,
    });
  } catch (err: any) {
    next(err);
  }
};

// export const GetModelByCarHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {

//     const dataFromApi = await GetModelByCar()
//     res.status(200).status(200).json({
//       status: 'success',
//       data: dataFromApi,
//     });
//   } catch (err: any) {
//     next(err);
//   }
// };





