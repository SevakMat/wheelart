import { NextFunction, Request, Response } from 'express';
import { findAllRimsService, findPopularRimsService, findRimByInputArgsService, findRimsByInputArgsService } from '../services/rims.service';
import { findTiresByInputArgsService } from '../services/tires.service';
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
    // const { wheelDetails, tireDetails } = await FindWheelDetailsByCarService(req.body.where)

    const wheelDetails: any = { studHoles: 5, pcd: 112, centerBore: '66.6', sizeR: 19 }

    const tireDetails: any = { tireWidth: 205, tireAspectRatio: 55, rimDiameter: 16 }

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

    let modelDada, yearDada, modificationDada: any = []
    if (where?.make) {
      modelDada = [
        { name: '1 Series', logo: '', slug: '1-series' },
        { name: '2 Series', logo: '', slug: '2-series' },
        {
          name: '2 Series Active Tourer',
          logo: '',
          slug: '2-series-active-tourer'
        },
        {
          name: '2 Series Gran Tourer',
          logo: '',
          slug: '2-series-gran-tourer'
        },
        { name: '3 Series', logo: '', slug: '3-series' },
        { name: '4 Series', logo: '', slug: '4-series' },
        { name: '5 Series', logo: '', slug: '5-series' },
        {
          name: '5 Series Gran Turismo',
          logo: '',
          slug: '5-series-gran-turismo'
        },
        { name: '6 Series', logo: '', slug: '6-series' },
        {
          name: '6 Series Gran Turismo',
          logo: '',
          slug: '6-series-gran-turismo'
        },
        { name: '7 Series', logo: '', slug: '7-series' },
        { name: '8 Series', logo: '', slug: '8-series' },
        { name: 'i3', logo: '', slug: 'i3' },
        { name: 'i4', logo: '', slug: 'i4' },
        { name: 'i5', logo: '', slug: 'i5' },
        { name: 'i7', logo: '', slug: 'i7' },
        { name: 'i8', logo: '', slug: 'i8' },
        { name: 'iX', logo: '', slug: 'ix' },
        { name: 'iX1', logo: '', slug: 'ix1' },
        { name: 'iX3', logo: '', slug: 'ix3' },
        { name: 'M Coupe', logo: '', slug: 'm-coupe' },
        { name: 'M Roadster', logo: '', slug: 'm-roadster' },
        { name: 'M1', logo: '', slug: 'm1' },
        { name: 'M2', logo: '', slug: 'm2' },
        { name: 'M3', logo: '', slug: 'm3' },
        { name: 'M4', logo: '', slug: 'm4' },
        { name: 'M5', logo: '', slug: 'm5' },
        { name: 'M6', logo: '', slug: 'm6' },
        { name: 'M8', logo: '', slug: 'm8' },
        { name: 'X1', logo: '', slug: 'x1' },
        { name: 'X2', logo: '', slug: 'x2' },
        { name: 'X3', logo: '', slug: 'x3' },
        { name: 'X3 M', logo: '', slug: 'x3-m' },
        { name: 'X4', logo: '', slug: 'x4' },
        { name: 'X4 M', logo: '', slug: 'x4-m' },
        { name: 'X5', logo: '', slug: 'x5' },
        { name: 'X5 M', logo: '', slug: 'x5-m' },
        { name: 'X6', logo: '', slug: 'x6' },
        { name: 'X6 M', logo: '', slug: 'x6-m' },
        { name: 'X7', logo: '', slug: 'x7' },
        { name: 'XM', logo: '', slug: 'xm' },
        { name: 'Z3', logo: '', slug: 'z3' },
        { name: 'Z4', logo: '', slug: 'z4' },
        { name: 'Z8', logo: '', slug: 'z8' }
      ]
      // modelDada = await getCarsInfoByCarsData("models", where?.make as string)
    }

    if (where?.make && where?.model) {
      yearDada = [
        { name: 2023, logo: '', slug: "2023" },
        { name: 2022, logo: '', slug: "2022" },
        { name: 2021, logo: '', slug: "2021" },
        { name: 2020, logo: '', slug: "2020" },
        { name: 2019, logo: '', slug: "2019" },
        { name: 2018, logo: '', slug: "2018" },
        { name: 2017, logo: '', slug: "2017" },


      ]
      // yearDada = await getCarsInfoByCarsData("years", where?.make as string, where?.model as string)
    }

    if (where?.make && where?.model && where?.year) {
      modificationDada = [
        { name: '335xi', logo: '', slug: 'e3db0dc2ac' },
        { name: '335i', logo: '', slug: '657521cffe' },
        { name: '330d', logo: '', slug: '809995a18a' },
        { name: '320i', logo: '', slug: '30a4b413c4' },
        { name: '320d', logo: '', slug: 'eed94b6ff3' },
        { name: '335i (ABA-WB35)', logo: '', slug: '1e0a84051e' },
        { name: '335d', logo: '', slug: 'f87fbff5bb' },
        { name: '330i', logo: '', slug: '8afb600704' },
        { name: '325d', logo: '', slug: '2c981a4590' },
        { name: '335i (ABA-WL35)', logo: '', slug: '8bdb505837' },
        { name: '320i (ABA-WA20)', logo: '', slug: 'ab8aa05e78' },
        { name: '320i', logo: '', slug: 'd01309496e' },
        { name: '318i', logo: '', slug: 'afa92741e1' },
        { name: '325i', logo: '', slug: '81f61042dc' },
        { name: '335i', logo: '', slug: '6b204fa5c2' },
        { name: '328i', logo: '', slug: 'd291ad2a5e' },
        { name: '330xi', logo: '', slug: '8a76780c6f' },
        { name: '325xi', logo: '', slug: '631e7b7a05' },
        { name: '325i xDrive (ABA-VF25)', logo: '', slug: '3cf7deae10' },
        { name: '325i (ABA-VB25)', logo: '', slug: '89760d10b8' },
        { name: '325i (ABA-VS25)', logo: '', slug: 'f24619a7d5' },
        { name: '335i (ABA-VS35)', logo: '', slug: '64afb346ce' },
        { name: '335i (ABA-VB35)', logo: '', slug: '3fdf98cc15' },
        { name: '320i (ABA-VR20)', logo: '', slug: '141f299c60' },
        { name: '320i (ABA-VA20)', logo: '', slug: '3fd36f654c' },
        { name: '320d', logo: '', slug: 'c0b6e6e1bf' },
        { name: '320d xDrive', logo: '', slug: 'd29af8b061' },
        { name: '316i', logo: '', slug: '3872d5306e' },
        { name: '320si', logo: '', slug: '8bfc4b718d' },
        { name: '318i', logo: '', slug: 'f24560ab7f' },
        { name: '318d', logo: '', slug: 'f3ef05ae57' },
        { name: '335d', logo: '', slug: '526e1ecd09' },
        { name: '320i', logo: '', slug: 'af33de77a0' },
        { name: '325d', logo: '', slug: 'f8f6621fb9' },
        { name: '330d', logo: '', slug: 'e724c1ac28' },
        { name: '330d xDrive', logo: '', slug: '284cdb7c46' },
        { name: '318i', logo: '', slug: 'c84ea181fa' },
        { name: '320i', logo: '', slug: 'bfb1896712' },
        { name: '335i xDrive', logo: '', slug: '6027e723ea' },
        { name: '335i', logo: '', slug: '0b5e344449' },
        { name: '330i xDrive', logo: '', slug: '8e7a464b2e' },
        { name: '330i', logo: '', slug: '7d148feb64' },
        { name: '325i xDrive', logo: '', slug: 'cee9346379' },
        { name: '325i', logo: '', slug: '67f2af3aa2' },
        { name: '335i xDrive', logo: '', slug: '705b74221b' },
        { name: '328i xDrive', logo: '', slug: 'e84b12e918' },
        { name: '335i xDrive', logo: '', slug: '10f0b5fd36' },
        { name: '323i', logo: '', slug: 'cdb3fcd3d3' },
        { name: '335d', logo: '', slug: '2bbe349a9f' },
        { name: '316d', logo: '', slug: '6d25adbe20' },
        { name: '335i', logo: '', slug: '5742b33b0a' },
        { name: '328i', logo: '', slug: '0a68dd43c2' },
        { name: '335i xDrive', logo: '', slug: '0a68ae40b7' },
        { name: '328i xDrive', logo: '', slug: '31dee6c36b' }
      ]

      // modificationDada = await getCarsInfoByCarsData("modifications", where?.make as string, where?.model as string, where?.year as string)
    }


    res.status(200).json({
      status: 'success',
      data: {
        modelDada,
        yearDada,
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

    // const dataFromApi = await getCarsInfoByCarsData("makes")

    const dataFromApi = [
      { name: "Bmw", image: "asdasdasdasd", slug: "bmw" },
      { name: "Mercedes", image: "asdasdasdasd", slug: "mercedes" },
      { name: "Opel", image: "asdasdasdasd", slug: "mercedes" },
    ];

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
      select: { id: true, sizeR: true, studHoles: true, pcd: true, centerBore: true, imageUrl: true, color: true, price: true, rimModel: true, width: true, gram: true }
    });

    let tires = []
    if (body.make && body.model & body.year && body.modification) {
      const tireData = await FindTireDetailsByCarService(body)
      tires = await findTiresByInputArgsService({
        where: {
          OR: tireData
        },
        select: { id: true, tireWidth: true, tireAspectRatio: true, rimDiameter: true, imageUrl: true }
      })
    }

    res.status(200).status(200).json({
      status: 'success',
      singleRim,
      tires: []
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

