
export const CarsDataFormater = (data: any) => {

  const filteredData = data.data.data.map((car: any) => {
    return {
      name: car.name || '',
      logo: car.logo || ''
    };
  });
  return filteredData
}