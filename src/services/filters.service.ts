import { PrismaClient } from "@prisma/client";
import { ClearRimsFiltersInputArgs } from "../controllers/inputs/ClearRimsFiltersInputArgs";
import { ClearRimsByFiltersInputArgs } from "../controllers/inputs/ClearRimsByFiltersInputArgs";
import { RimFilterQuery } from "../controllers/queries/RimFilterQuery";
import { TransformeRimsFilters } from "../helpers/transformeRimsFilters";
import { ClearTiresFiltersInputArgs } from "../controllers/inputs/ClearTiresFiltersInputArgs";
import { TransformeTiresFilters } from "../helpers/transformeTiresFilters";
import { ClearTiresByFiltersInputArgs } from "../controllers/inputs/ClearTiresByFiltersInputArgs";
import { TireFilterQuery } from "../controllers/queries/TireFilterQuery";

export interface GetRimsFiltersServiceType {
  sizeR?: number[];
  pcd?: number[];
  studHoles?: number[];
  centerBore?: string[];
  width?: number[]
  color?: string[]
  price?: string[]
  pagination?: number
}

const prisma = new PrismaClient();

export const getFiltersAndRimsService = async (userSelectedFilters: GetRimsFiltersServiceType) => {

  const clearFilterData = ClearRimsFiltersInputArgs(userSelectedFilters);
  const result: any = await prisma.rims.groupBy(clearFilterData);

  const clearRimData = ClearRimsByFiltersInputArgs(userSelectedFilters)
  const rimFilterQuery = RimFilterQuery(userSelectedFilters)

  const wheelsAndCount = await prisma.$transaction([
    prisma.rims.findMany(clearRimData),
    prisma.rims.count({
      where: rimFilterQuery,
    }),
  ]);

  const [wheels, rimsCount] = wheelsAndCount;

  return {
    filters: TransformeRimsFilters(result),
    wheelsData: wheels,
    rimsCount: rimsCount
  }
};



export interface GetTiresFiltersServiceType {
  tireWidth?: number[];
  tireAspectRatio?: number[];
  rimDiameter?: number[];
  marka?: string[];
  stock?:number[];
  pagination?: number
}


export const getFiltersAndTiresService = async (userSelectedFilters: GetTiresFiltersServiceType) => {

  const clearTireFilterData = ClearTiresFiltersInputArgs(userSelectedFilters);

  const tireData: any = await prisma.tire.groupBy(clearTireFilterData);

  const clearTireData = ClearTiresByFiltersInputArgs(userSelectedFilters)
  const rimFilterQuery = TireFilterQuery(userSelectedFilters)

  const wheelsAndCount = await prisma.$transaction([
    prisma.tire.findMany(clearTireData),
    prisma.tire.count({
      where: rimFilterQuery,
    }),
  ]);

  const [tires, tiresCount] = wheelsAndCount;
  
  return {
    filters: TransformeTiresFilters(tireData),
    tiresData: tires,
    tiresCount: tiresCount
  }
};

