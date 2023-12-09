import { NextFunction, Request, Response } from 'express';
import { findAllRimsService, findRimsByInputArgsService } from '../services/rims.service';

export const getAllRimsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const rims = await findAllRimsService(
      { id: true, width: true, bore: true, color: true }
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

    const rims = await findRimsByInputArgsService({
      where: req.body.where,
      select: { id: true, width: true, bore: true, color: true }
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

