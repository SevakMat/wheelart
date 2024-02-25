import { NextFunction, Request, Response } from 'express';
import { getFiltersAndRimsService, getFiltersAndTiresService } from '../services/filters.service';

export const getAllRimsFilters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filterData = await getFiltersAndRimsService(req.body)

    res.status(200).json({
      status: 'success',
      filterData,
    });
  } catch (err: any) {
    console.log(err);

  }
};

export const getAllTiresFilters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filterData = await getFiltersAndTiresService(req.body)

    res.status(200).json({
      status: 'success',
      filterData,
    });
  } catch (err: any) {
    console.log(err);

  }
};



