import { Prisma } from '@prisma/client';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { CarsDataFormater } from '../controllers/helpers/CarsDataFormater';

// make=bmw&
// model=3-series&
// modification=5052597562&
// year=2008&
// user_key=YOUR-API-KEY

interface FindWheelByCarProps {
  key: string
  make?: string;
  model?: string;
  modification?: string;
  year?: string
}

const generateUrl = ({ key, make, model, year, modification }: FindWheelByCarProps) => {
  let url = `https://api.wheel-size.com/v2/${key}/?`

  const makeParams = make ? `make=${make}&` : ""
  const modelParams = model ? `model=${model}&` : ""
  const modificationParams = "modification" ? `modification=${modification}&` : ""
  const yesrParams = year ? `year=${year}&` : ""
  const apyKey = "user_key=730f8ee09c9c4ec4519b3cc39e9db35f"
  url = url + makeParams + modelParams + yesrParams + modificationParams + apyKey

  return url
}

const filterDate = (data: any) => {

  const findUnic = data[0].technical
  // console.log(data[0].technical.stud_holes);
  // console.log(data[0].technical.pcd);
  // console.log(data[0].technical.centre_bore);
  // console.log(data[0].wheels[0].front.rim_diameter);


  const curentWheelData = {
    studHoles: findUnic.stud_holes,
    pcd: findUnic.pcd,
    centerBore: findUnic.centre_bore,
    sizeR: data[0].wheels[0].front.rim_diameter
  }

  return curentWheelData
}


export const FindWheelDetailsByCarService = async (props: FindWheelByCarProps): Promise<Prisma.RimsWhereInput> => {
  let url = generateUrl({ ...props, key: "search/by_model" })

  console.log(333, url);


  var config = {
    method: 'get',
    url: url,
    headers: {}
  };
  return axios(config)
    .then(function (response) {
      return filterDate(response.data.data)

    })
    .catch(function (error) {
      // console.log(error);
      return {}
    });
};

export const getCarsInfoByCarsData = async (key: string, make?: string, model?: string, year?: string, modification?: string) => {
  const url = generateUrl({
    key: key,
    make: make,
    model: model,
    year: year,
    modification: modification
  })
  console.log(url);

  var config = {
    method: 'get',
    url: url,
    headers: {},
  };
  return axios(config)
    .then(function (response) {
      return CarsDataFormater(response)
    })
    .catch(function (error) {
      return error.message
      // console.log(error);
    });
};