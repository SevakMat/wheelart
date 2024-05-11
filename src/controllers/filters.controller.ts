import { NextFunction, Request, Response } from "express";
import {
  getFiltersAndRimsService,
  getFiltersAndTiresService,
} from "../services/filters.service";

export const getAllRimsFilters = async (req: Request, res: Response) => {
  try {
    const filterData = await getFiltersAndRimsService(req.body);

    return res.status(200).json({
      status: "success",
      filterData,
    });
  } catch (err: any) {
    return res.status(500).json({
      status: "error",
      message: "issues  with  getAllRimsFilters",
    });
  }
};

export const getAllTiresFilters = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filterData = await getFiltersAndTiresService(req.body);

    return res.status(200).json({
      status: "success",
      filterData,
    });
  } catch (err: any) {
    return res.status(502).json({
      status: "failed",
      message: "An error occurred",
    });
  }
};
