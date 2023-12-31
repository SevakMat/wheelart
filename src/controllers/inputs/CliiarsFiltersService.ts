import { GetFiltersServiceType } from "../../services/filters.service";

export const CliiarsFiltersService = (filter: GetFiltersServiceType): any => {
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

export const CliiarsCarFiltersService = (filter: GetFiltersServiceType): any => {
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

  const groupedFilters: Record<string, any> = {

    ...(Object.keys(filterQuery).length > 0 && { where: filterQuery }),
    select: {
      id: true,
      rimModel: true,
      sizeR: true,
      centerBore: true,
      price: true,
      pcd: true,
      studHoles: true,
      imageUrl: true,

    },
  };

  return groupedFilters;
};
