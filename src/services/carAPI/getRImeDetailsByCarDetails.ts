import { CarDetailsType } from "./carType";
import { generateUrl } from "./generateApiUrl";

export const generateRimAndTireDetails = (data: any) => {
  const findUnic = data[0].technical;

  const transformedArray = []
    .concat(
      ...data[0].wheels.map((item: any) => [
        {
          sizeR: item.front.rim_diameter,
          width: item.front.rim_width,
        },
        {
          sizeR: item.rear?.rim_diameter,
          width: item.rear?.rim_width,
        },
      ])
    )
    .filter((obj: any) => obj.sizeR !== null && obj.width !== null);

  console.log("transformedArray", transformedArray);

  const rimDetails = {
    studHoles: findUnic.stud_holes,
    pcd: findUnic.pcd,
    centerBore: findUnic.centre_bore,
    OR: transformedArray,
    // sizeR: { in: test },
  };

  const rimeFront = data[0].wheels[0].front;

  const tireDetails = {
    tireWidth: rimeFront.tire_width,
    tireAspectRatio: rimeFront.tire_aspect_ratio,
    rimDiameter: rimeFront.rim_diameter,
  };

  // const curentRimeData = transformWheelsObject(data[0].wheels)

  return {
    rimDetails,
    tireDetails,
  };
};

export const GetRImeDetailsByCarDetails = async (
  props: CarDetailsType
): Promise<any> => {
  let url = generateUrl({ ...props, key: "search/by_model" });
  const response = await fetch(url, { method: "GET" });
  const testJson = await response.json();
  return generateRimAndTireDetails(testJson.data);

  // return responce;
};
