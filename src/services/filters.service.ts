import { PrismaClient } from "@prisma/client";
import { CliiarsCarFiltersService, CliiarsFiltersService } from "../controllers/inputs/CliiarsFiltersService";
import { TransformArray } from "../helpers/transformeFilters";

export interface GetFiltersServiceType {
  sizeR: number[];
  pcd: number[];
  studHoles: number[];
  centerBore: string[];
}

const prisma = new PrismaClient();

export const getFiltersService = async (filter: GetFiltersServiceType) => {

  const filterData = CliiarsFiltersService(filter);
  const result: any = await prisma.rims.groupBy(filterData);


  const wheelData = CliiarsCarFiltersService(filter)
  const wheels = await prisma.rims.findMany(wheelData);

  return {
    filters: TransformArray(result),
    wheelsData: wheels
  }
  return TransformArray(result);
};
