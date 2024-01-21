import { PrismaClient, Prisma, Tire } from "@prisma/client";

const prisma = new PrismaClient();


interface FindTiresByInputArgsServiceProps {
  where?: Prisma.TireWhereInput,
  select?: Prisma.TireSelect
}


export const findTiresByInputArgsService = async (
  { where, select }: FindTiresByInputArgsServiceProps
) => {
  try {
    return (await prisma.tire.findMany({
      select,
      where
    })) as Tire[];
  } catch (error) {
    throw error
  }
};
export const findTiresTestService = async (
  { select }: FindTiresByInputArgsServiceProps
) => {
  try {
    return (await prisma.tire.findMany({
      select,
      take: 5,
    })) as Tire[];
  } catch (error) {
    throw error
  }
};