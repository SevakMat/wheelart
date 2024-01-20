import { PrismaClient } from "@prisma/client";
import { ClearFiltersInputArgs } from "../controllers/inputs/ClearFiltersInputArgs";
import { ClearRimsByFiltersInputArgs } from "../controllers/inputs/ClearRimsByFiltersInputArgs";
import { RimFilterQuery } from "../controllers/queries/RimFilterQuery";
import { TransformArray } from "../helpers/transformeFilters";

export interface GetFiltersServiceType {
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

export const getFiltersAndRimsService = async (userSelectedFilters: GetFiltersServiceType) => {

  const clearFilterData = ClearFiltersInputArgs(userSelectedFilters);
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
    filters: TransformArray(result),
    wheelsData: wheels,
    rimsCount: rimsCount
  }
};
