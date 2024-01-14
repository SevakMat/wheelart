import { NextFunction, Request, Response } from 'express';
import { getFiltersAndRimsService } from '../services/filters.service';

export const getAllFilters = async (
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
    next(err);
  }
};



