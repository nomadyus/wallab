export const SortFilters = {
  SORT_BY_NAME: 'SORT_BY_NAME',
  SORT_BY_AVAILABILITY: 'SORT_BY_AVAILABILITY'
};

export const setSortFilter = filter => ({
  type: 'SET_SORT_FILTER',
  filter
});