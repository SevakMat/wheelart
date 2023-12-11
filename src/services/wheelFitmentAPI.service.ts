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
  make?: string;
  model?: number;
  modification?: string;
  year?: number
}

const generateUrl = ({ make, model, modification, year }: FindWheelByCarProps) => {
  let url = "https://api.wheel-size.com/v2/search/by_model/"

  const makeParams = make ? `?make=${make}&` : ""
  const modelParams = model ? `model=${model}&` : ""
  const modificationParams = modification ? `modification=${modification}&` : ""
  const yesrParams = year ? `year=${year}` : ""
  const apyKey = "&user_key=730f8ee09c9c4ec4519b3cc39e9db35f"
  url = url + makeParams + modelParams + modificationParams + yesrParams + apyKey

  return url
}

const filterDate = (data: any) => {

  const findUnic = data[0].technical
  console.log(data[0].technical.stud_holes);
  console.log(data[0].technical.pcd);
  console.log(data[0].technical.centre_bore);
  console.log(data[0].wheels[0].front.rim_diameter);


  const curentWheelData = {
    studHoles: findUnic.stud_holes,
    pcd: findUnic.pcd,
    centerBore: findUnic.centre_bore,
    sizeR: data[0].wheels[0].front.rim_diameter
  }

  return curentWheelData
}


export const FindWheelByCarService = async (props: FindWheelByCarProps): Promise<Prisma.RimsWhereInput> => {
  let url = generateUrl(props)
  console.log(url);


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
      console.log(error);
      return {}
    });

};

export const GetAllCars = async () => {
  let url = "https://api.wheel-size.com/v2/makes/?user_key=730f8ee09c9c4ec4519b3cc39e9db35f"

  var config = {
    method: 'get',
    url,
    headers: {}
  };

  return axios(config)
    .then(function (response) {
      return CarsDataFormater(response)
    })

    .catch(function (error) {
      console.log(error);
    });
};

export const GetModelByCar = async (model: string) => {
  let url = `https://api.wheel-size.com/v2/models/?make=${model}&user_key=730f8ee09c9c4ec4519b3cc39e9db35f`

  var config = {
    method: 'get',
    url,
    headers: {}
  };

  return axios(config)
    .then(function (response) {
      return CarsDataFormater(response)
    })

    .catch(function (error) {
      console.log(error);
    });
};