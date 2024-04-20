import { CarDetailsType } from "./carType";
import { generateUrl } from "./generateApiUrl";

function extractTireInformation(inputArray: any) {
  const tireArray: any = [];

  inputArray.forEach((item: any) => {
    if (
      item.front &&
      item.front.tire_width &&
      item.front.tire_aspect_ratio &&
      item.front.rim_diameter
    ) {
      tireArray.push({
        tireWidth: item.front.tire_width,
        tireAspectRatio: item.front.tire_aspect_ratio,
        rimDiameter: item.front.rim_diameter,
      });
    }
    if (
      item.rear &&
      item.rear.tire_width &&
      item.rear.tire_aspect_ratio &&
      item.rear.rim_diameter
    ) {
      tireArray.push({
        tireWidth: item.rear.tire_width,
        tireAspectRatio: item.rear.tire_aspect_ratio,
        rimDiameter: item.rear.rim_diameter,
      });
    }
  });

  return tireArray;
}

export const GetTireDetailsByCarDetails = async (
  props: CarDetailsType
): Promise<any> => {
  let url = generateUrl({ ...props, key: "search/by_model" });

  const response = await fetch(url, { method: "GET" });
  const testJson = await response.json();

  return extractTireInformation(testJson.data[0].wheels);
};
