import { CarDetailsType } from "./carType";

export const generateUrl = ({
  key,
  make,
  model,
  generation,
  modification,
}: CarDetailsType) => {
  let url = `${process.env.WHEEL_SIZE_API_URL}/${key}/?`;

  const makeParams = make ? `make=${make}&` : "";
  const modelParams = model ? `model=${model}&` : "";
  const modificationParams = modification
    ? `modification=${modification}&`
    : "";
  const generationParams = generation ? `generation=${generation}&` : "";
  const apyKey = "user_key=730f8ee09c9c4ec4519b3cc39e9db35f";
  url =
    url +
    makeParams +
    modelParams +
    generationParams +
    modificationParams +
    apyKey;

  return url;
};
