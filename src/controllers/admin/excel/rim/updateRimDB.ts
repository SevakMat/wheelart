import { PrismaClient, Rims } from "@prisma/client";
import { RimData } from "../../rims/types";

const prisma = new PrismaClient();

export async function updateRimDB(rimsArray: any[]) {
  try {
    for (const rim of rimsArray) {
      const existingRim = await prisma.rims.findFirst({
        where: { rimModel: rim.rimModel },
      });

      if (existingRim) {
        const existingStock = existingRim?.stock || 0;

        const test = await prisma.rims.update({
          where: { id: existingRim.id },
          data: { stock: existingStock + rim.stock },
        });
        console.log("test", test);
      } else {
        await prisma.rims.create({
          data: rim,
        });
      }
    }
    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
}