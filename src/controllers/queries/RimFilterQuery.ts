import { GetRimsFiltersServiceType } from "../../services/filters.service";

export const RimFilterQuery = (filter: GetRimsFiltersServiceType) => {
  const { sizeR, pcd, studHoles, centerBore, width, color, price } = filter;

  const filterQuery: Record<string, { in: (number | string)[] }> = {};

  if (sizeR && sizeR.length > 0) {
    filterQuery.sizeR = { in: sizeR };
  }

  if (pcd && pcd.length > 0) {
    filterQuery.pcd = { in: pcd };
  }

  if (studHoles && studHoles.length > 0) {
    filterQuery.studHoles = { in: studHoles };
  }

  if (centerBore && centerBore.length > 0) {
    filterQuery.centerBore = { in: centerBore.map(String) };
  }
  if (width && width.length > 0) {
    filterQuery.width = { in: width };
  }

  if (color && color.length > 0) {
    filterQuery.color = { in: color };
  }

  if (price && price.length > 0) {
    filterQuery.price = { in: price };
  }



  return filterQuery
}