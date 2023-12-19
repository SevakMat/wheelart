import { NextFunction, Request, Response } from 'express';
import { getFiltersService } from '../services/filters.service';

export const getAllFilters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const filterData = await getFiltersService(req.body)

  try {
    res.status(200).status(200).json({
      status: 'success',
      filterData,
    });
  } catch (err: any) {
    next(err);
  }
};



