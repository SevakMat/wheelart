
export const CarsDataFormater = (data: any, by?: string) => {

  const filteredData = data.data.data.map((car: any) => {
    return {
      name: car.name || '',
      logo: car.logo || '',
      slug: car.slug || '',

    };
  });
  return filteredData
}