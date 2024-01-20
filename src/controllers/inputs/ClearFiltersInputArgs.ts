import { GetFiltersServiceType } from "../../services/filters.service";

export const ClearFiltersInputArgs = (filter: GetFiltersServiceType): any => {

  const { sizeR, pcd, studHoles, centerBore } = filter;

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

  const groupedFilters: Record<string, any> = {
    by: ['sizeR', 'pcd', 'studHoles', 'centerBore'],
    _count: {
      sizeR: true,
      pcd: true,
      studHoles: true,
      centerBore: true,
    },
    ...(Object.keys(filterQuery).length > 0 && { having: filterQuery }),
  };

  return groupedFilters;
};
