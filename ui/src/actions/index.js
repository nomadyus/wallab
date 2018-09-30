import * as types from './types';

export const setSortFilterSuccess = sortBy => ({
  type: types.SET_SORT_BY_SUCCESS,
  sortBy
});

export const fetchItemsSuccess = items => ({
  type: types.FETCH_ITEMS_SUCCESS,
  items
});

export const fetchItemAvailabilitySuccess = availability => ({
  type: types.FETCH_ITEM_AVAILABILITY_SUCCESS,
  availability
});

export const sortItemByNameSuccess = items => ({
  type: types.SORT_BY_NAME_SUCCESS,
  items
});

export const sortByAvailabilitySuccess = items => ({
  type: types.SORT_BY_NAME_SUCCESS,
  items
});