import { Prisma } from '@prisma/client';
import axios, { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { CarsDataFormater } from '../controllers/helpers/CarsDataFormater';

// make=bmw&
// model=3-series&
// modification=5052597562&
// year=2008&
// user_key=YOUR-API-KEY

interface FindWheelByCarProps {
  key: string;
  make?: string;
  model?: string;
  modification?: string;
  generation?: string;
}

const generateUrl = ({ key, make, model, generation, modification }: FindWheelByCarProps) => {
  let url = `https://api.wheel-size.com/v2/${key}/?`

  const makeParams = make ? `make=${make}&` : ""
  const modelParams = model ? `model=${model}&` : ""
  const modificationParams = modification ? `modification=${modification}&` : ""
  const generationParams = generation ? `generation=${generation}&` : ""
  const apyKey = "user_key=730f8ee09c9c4ec4519b3cc39e9db35f"
  url = url + makeParams + modelParams + generationParams + modificationParams + apyKey

  return url
}

interface InputObject {
  front: {
    tire_width?: number;
    tire_aspect_ratio?: number;
    rim_diameter?: number;
  };
}

interface ResultObject {
  tireWidth: number[];
  tireAspectRatio: number[];
  rimDiameter: number[];
}

function transformWheelsObject(inputObject: InputObject[]): ResultObject {
  const resultObject: ResultObject = {
    tireWidth: [],
    tireAspectRatio: [],
    rimDiameter: []
  };
  inputObject.forEach((wheel) => {
    const rear = wheel.front;

    if (rear.tire_width) {
      resultObject.tireWidth.push(rear.tire_width);
    }

    if (rear.tire_aspect_ratio) {
      resultObject.tireAspectRatio.push(rear.tire_aspect_ratio);
    }

    if (rear.rim_diameter) {
      resultObject.rimDiameter.push(rear.rim_diameter);
    }
  });

  return resultObject;
}



const filterData = (data: any) => {

  const findUnic = data[0].technical
  
  const curentWheelData = {
    studHoles: findUnic.stud_holes,
    pcd: findUnic.pcd,
    centerBore: findUnic.centre_bore,
    sizeR: data[0].wheels[0].front.rim_diameter
  }

  const rimeFront = data[0].wheels[0].front

  const curentTireData = {
    tireWidth: rimeFront.tire_width,
    tireAspectRatio: rimeFront.tire_aspect_ratio,
    rimDiameter: rimeFront.rim_diameter
  }

  // const curentRimeData = transformWheelsObject(data[0].wheels)

  return {
    wheelDetails: curentWheelData,
    tireDetails: curentTireData
  }
}




function extractTireInformation(inputArray: any) {
  // Initialize an empty array to store the extracted tire information
  const tireArray: any = [];

  // Iterate over each object in the input array
  inputArray.forEach((item: any) => {
    // Check if 'front' property exists and contains necessary tire information
    if (item.front && item.front.tire_width && item.front.tire_aspect_ratio && item.front.rim_diameter) {
      // Extract the required tire information and add it to the tireArray
      tireArray.push({
        tireWidth: item.front.tire_width,
        tireAspectRatio: item.front.tire_aspect_ratio,
        rimDiameter: item.front.rim_diameter,
      });
    }

    // Check if 'rear' property exists and contains necessary tire information
    if (item.rear && item.rear.tire_width && item.rear.tire_aspect_ratio && item.rear.rim_diameter) {
      // Extract the required tire information and add it to the tireArray
      tireArray.push({
        tireWidth: item.rear.tire_width,
        tireAspectRatio: item.rear.tire_aspect_ratio,
        rimDiameter: item.rear.rim_diameter,
      });
    }
  });

  return tireArray;
}

export const FindWheelDetailsByCarService = async (props: FindWheelByCarProps): Promise<any> => {
  let url = generateUrl({ ...props, key: "search/by_model" })
  var config = {
    method: 'get',
    url: url,
    headers: {}
  };
  
  return axios(config)
    .then(function (response) {
      return filterData(response.data.data)

    })
    .catch(function (error) {
      throw error;
    });
};

export const FindTireDetailsByCarService = async (props: FindWheelByCarProps): Promise<any> => {
  let url = generateUrl({ ...props, key: "search/by_model" })

  var config = {
    method: 'get',
    url: url,
    headers: {}
  };
  return axios(config)
    .then(function (response) {
      return extractTireInformation(response.data.data[0].wheels)

    })
    .catch(function (error) {
      throw error;
    });
};


export const getCarsInfoByCarsData = async (
  key: string,
  make?: string,
  model?: string,
  generation?: string,
  modification?: string
) => {
  const url = generateUrl({ key, make, model, generation, modification });

  
  const config: AxiosRequestConfig = {
    method: 'get',
    url: url,
    headers: {},
  };

  try {
    const response = await axios(config);
    return CarsDataFormater(response);
  } catch (error: any) {
    throw error;
    
  }
};