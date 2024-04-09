import { Request, Response } from "express";

import { findTireByInputArgsService } from "../services/tires.service";

export const getSingleTireDataHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const tireId = +id;

    const singleTire = await findTireByInputArgsService({
      where: {
        id: tireId,
      },
      select: {
        id: true,
        imageUrl: true,
        marka: true,
        rimDiameter: true,
        stock: true,
        tireAspectRatio: true,
        tireWidth: true,
        price: true,
      },
    });

    res.status(200).status(200).json({
      status: "success",
      singleTire,
    });
  } catch (err: any) {
    console.log(err);
  }
};
