export const ClearCreateTireDataHelper = (body: any) => {
  const {
    tireWidth,
    tireAspectRatio,
    rimDiameter,
    marka,
    stock,
    imageUrl,
    price,
  } = body;

  return {
    tireWidth: Number(tireWidth),
    tireAspectRatio: Number(tireAspectRatio),
    rimDiameter: Number(rimDiameter),
    marka,
    stock: Number(stock),
    imageUrl,
    price: Number(price),
  };
};

export const ClearUpdateRimDataHelper = (body: any) => {
  const {
    sizeR,
    studHoles,
    pcd,
    centerBore,
    rimModel,
    width,
    color,
    gram,
    description,
    imageUrl,
    price,
    score,
  } = body;

  return {
    sizeR: Number(sizeR),
    studHoles: Number(studHoles),
    pcd: Number(pcd),
    centerBore,
    rimModel,
    width: Number(width),
    color,
    gram: Number(gram),
    description,
    imageUrl,
    price: Number(price),
    score: Number(score),
  };
};
