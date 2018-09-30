import * as types from './types';

export const setSortFilter = sortBy => ({
  type: types.SET_SORT_BY,
  sortBy
});

export const fetchItems = items => ({
  type: types.FETCH_ITEMS,
  items
});

export const fetchItemAvailability = (id, availability) => ({
  type: types.FETCH_ITEM_AVAILABILITY,
  id,
  availability
});

export const sortItemByName = (name, items) => ({
  type: types.SORT_BY_NAME,
  name,
  items
});

export const sortByAvailability = (availability, items) => ({
  type: types.SORT_BY_NAME,
  items,
  availability
});