import { NextFunction, Request, Response } from 'express';
import { findAllRimsService, findPopularRimsService, findRecommendedRimsService, findRimByInputArgsService, findRimsByInputArgsService } from '../services/rims.service';
import { findTiresByInputArgsService, findTiresTestService } from '../services/tires.service';
import { FindTireDetailsByCarService, FindWheelDetailsByCarService, getCarsInfoByCarsData } from '../services/wheelFitmentAPI.service';
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
) => {
  try {

    const { pagination } = req.body.where;
    const { wheelDetails, tireDetails } = await FindWheelDetailsByCarService(req.body.where)

    // const wheelDetails: any = { studHoles: 5, pcd: 112, centerBore: '66.6', sizeR: 19 }

    // const tireDetails: any = { tireWidth: 205, tireAspectRatio: 55, rimDiameter: 16 }

    const { rims, rimsCount } = await findRimsByInputArgsService({
      where: wheelDetails,
      select: { id: true, sizeR: true, centerBore: true, imageUrl: true, rimModel: true, price: true, pcd: true, studHoles: true },
      pagination
    });

    const tires = await findTiresByInputArgsService({
      where: tireDetails,
      select: { id: true, tireWidth: true, rimDiameter: true, marka: true, stock: true, tireAspectRatio: true, imageUrl: true },
    });

    res.status(200).json({
      status: 'success',
      data: { rims, tires, rimsCount, wheelDetails }
    });
  } catch (err: any) {
    console.log(err);

  }
};


export const getCarDatailsHandler = async (
  req: Request,
  res: Response,
) => {
  try {

    const { where } = req.body

    let modelDada, generationDada, modificationDada: any = []
    if (where?.make) {
           modelDada = await getCarsInfoByCarsData("models", where?.make as string)
    }
    
    if (where?.make && where?.model) {
      generationDada = await getCarsInfoByCarsData("generations", where?.make as string, where?.model as string)

    }
    /// stuc nerqev 

    if (where?.make && where?.model && where?.generation) {
      modificationDada = await getCarsInfoByCarsData("modifications", where?.make as string, where?.model as string, where?.generation as string)
    }


    res.status(200).json({
      status: 'success',
      data: {
        modelDada,
        generationDada,
        modificationDada
      }
    });
  } catch (err: any) {
    console.log(err);

  }
};


export const getCarsTypesHandler = async (
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

// export const getModelByCarHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { make } = req.query

//     const dataFromApi = await getCarsInfoByCarsData("models", make as string)
//     // const dataFromApi = [
//     //   { name: "Series3", image: "asdasdasdasd" },
//     //   { name: "Series5", image: "asdasdasdasd" },
//     //   { name: "Series7", image: "asdasdasdasd" },
//     // ];

//     res.status(200).status(200).json({
//       status: 'success',
//       data: dataFromApi,
//     });
//   } catch (err: any) {
//     next(err);
//   }
// };

// export const getYearByCarHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { make, model } = req.query

//     const dataFromApi = await getCarsInfoByCarsData("years", make as string, model as string)
//     // const dataFromApi = [
//     //   { name: "2007", image: "asdasdasdasd" },
//     //   { name: "2008", image: "asdasdasdasd" },
//     //   { name: "2009", image: "asdasdasdasd" },
//     // ];

//     res.status(200).status(200).json({
//       status: 'success',
//       data: dataFromApi,
//     });
//   } catch (err: any) {
//     next(err);
//   }
// };


// export const getModificationsByCarHandler = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {

//   try {
//     const { make, model, year } = req.query

//     const dataFromApi = await getCarsInfoByCarsData("modifications", make as string, model as string, year as string)

//     // const dataFromApi = [
//     //   { name: "228i", image: "asdasdasdasd" },
//     //   { name: "230i", image: "asdasdasdasd" },
//     //   { name: "248i", image: "asdasdasdasd" },
//     // ];
//     res.status(200).status(200).json({
//       status: 'success',
//       data: dataFromApi,
//     });
//   } catch (err: any) {
//     next(err);
//   }
// };

export const getSingleRimDataHandler = async (
  req: Request,
  res: Response,
) => {

  try {
    const { id } = req.params
    const { body } = req


    const rimId = +id

    const singleRim = await findRimByInputArgsService({
      where: {
        id: rimId
      },
      select: { id: true, sizeR: true, studHoles: true, pcd: true, centerBore: true, imageUrl: true, color: true, price: true, rimModel: true, width: true, gram: true, score: true }
    });

    const recommendedRims: any = await findRecommendedRimsService({
      where: {
        studHoles: singleRim.studHoles || undefined,
        pcd: singleRim.pcd || undefined,
        centerBore: singleRim.centerBore || undefined,
        NOT: {
          id: rimId, // Exclude records where the id is equal to 4
        },
      },
      select: { id: true, sizeR: true, studHoles: true, pcd: true, centerBore: true, imageUrl: true, color: true, price: true, rimModel: true, width: true, gram: true }
    })


    let tires: any = []
    if (body.make && body.model & body.year && body.modification) {
      const tireData = await FindTireDetailsByCarService(body)
      tires = await findTiresByInputArgsService({
        where: {
          OR: tireData
        },
        select: { id: true, tireWidth: true, tireAspectRatio: true, rimDiameter: true, imageUrl: true }
      })
    } else {
      tires = await findTiresTestService({
        select: { id: true, tireWidth: true, tireAspectRatio: true, rimDiameter: true, imageUrl: true }
      })

    }

    res.status(200).status(200).json({
      status: 'success',
      singleRim,
      recommendedTires: tires,
      recommendedRims: recommendedRims
    });
  } catch (err: any) {
    console.log(err)
  }
};



export const getPopularRimsDataHandler = async (
  req: Request,
  res: Response,
) => {

  try {

    const popularRims = await findPopularRimsService()

    res.status(200).status(200).json({
      status: 'success',
      popularRims,
    });
  } catch (err: any) {
    console.log(err)
  }
};

