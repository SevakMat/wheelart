import { GetFiltersServiceType } from "../../services/filters.service";

export const RimFilterQuery = (filter: GetFiltersServiceType) => {
  const { sizeR, pcd, studHoles, centerBore } = filter;

  const filterQuery: Record<string, { in: (number | string)[] }> = {};

  if (sizeR.length > 0) {
    filterQuery.sizeR = { in: sizeR };
  }

  if (pcd.length > 0) {
    filterQuery.pcd = { in: pcd };
  }

  if (studHoles.length > 0) {
    filterQuery.studHoles = { in: studHoles };
  }

  if (centerBore.length > 0) {
    filterQuery.centerBore = { in: centerBore.map(String) };
  }
  return filterQuery
}