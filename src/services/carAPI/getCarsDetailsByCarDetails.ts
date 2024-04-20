import { CarsDataFormater } from "../../controllers/helpers/CarsDataFormater";
import { generateUrl } from "./generateApiUrl";

export const getCarsDetailsByCarDetails = async (
  key: string,
  make?: string,
  model?: string,
  generation?: string,
  modification?: string
) => {
  const url = generateUrl({ key, make, model, generation, modification });

  try {
    const response = await fetch(url, { method: "GET" });
    const testJson = await response.json();
    return CarsDataFormater(testJson);
  } catch (error: any) {
    throw error;
  }
};
