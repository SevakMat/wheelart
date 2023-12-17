import { PrismaClient } from "@prisma/client";
import { CliiarsFiltersService } from "../controllers/inputs/CliiarsFiltersService";
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

  return TransformArray(result);
};
