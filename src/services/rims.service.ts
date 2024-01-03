import { PrismaClient, Prisma, Rims } from "@prisma/client";


const prisma = new PrismaClient();

export const findAllRimsService = async (
  select?: Prisma.RimsSelect
) => {
  return (await prisma.rims.findMany({
    select,
  })) as Rims[];
};

interface FindRimsByInputArgsServiceProps {
  where: Prisma.RimsWhereInput,
  select?: Prisma.RimsSelect

}

export const findRimsByInputArgsService = async (
  { where, select }: FindRimsByInputArgsServiceProps
) => {

  return (await prisma.rims.findMany({
    select,
    where
  })) as Rims[];
};

export const findRimByInputArgsService = async (
  { where, select }: FindRimsByInputArgsServiceProps
) => {

  return (await prisma.rims.findFirst({
    select,
    where
  })) as Rims
};

