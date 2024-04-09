import { GetRimsFiltersServiceType } from "../../services/filters.service";

export const ClearRimsFiltersInputArgs = (
  filter: GetRimsFiltersServiceType
): any => {
  const { sizeR, pcd, studHoles, centerBore, width, color, price } = filter;

  const filterQuery: Record<string, { in: (number | string)[] }> = {};

  // if (sizeR && sizeR.length > 0) {
  //   filterQuery.sizeR = { in: sizeR };
  // }

  // if (pcd && pcd.length > 0) {
  //   filterQuery.pcd = { in: pcd };
  // }

  // if (studHoles && studHoles.length > 0) {
  //   filterQuery.studHoles = { in: studHoles };
  // }

  // if (color && color.length > 0) {
  //   filterQuery.color = { in: color };
  // }

  // if (width && width.length > 0) {
  //   filterQuery.width = { in: width };
  // }

  // if (price && price.length > 0) {
  //   filterQuery.price = { in: price };
  // }

  if (centerBore && centerBore.length > 0) {
    filterQuery.centerBore = { in: centerBore.map(String) };
  }

  const groupedFilters: Record<string, any> = {
    by: ["sizeR", "pcd", "studHoles", "centerBore", "width", "color", "price"],
    _count: {
      sizeR: true,
      pcd: true,
      studHoles: true,
      centerBore: true,
      width: true,
      color: true,
      price: true,
    },
    ...(Object.keys(filterQuery).length > 0 && { having: filterQuery }),
  };

  return groupedFilters;
};
