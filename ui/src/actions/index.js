import * as actionTypes from './types';
import bffClient from '../services/bffClient';

export const sortByField = field => (a, b) => {
  if (typeof(field) === 'string') {
    var left = a[field].toLowerCase();
    var right = b[field].toLowerCase();
    return left < right ? -1 : left > right ? 1 : 0;
  }
  return a[field] - b[field];
}

export const sortInventory = (sort, items) => ({
  type: actionTypes.SORT_INVENTORY,
  sort,
  items: [...items].sort(sortByField(sort))
});

export const requestInventory = () => ({
  type: actionTypes.REQUEST_INVENTORY
});

export const receivedInventory = items => ({
  type: actionTypes.RECEIVED_INVENTORY,
  receivedAt: Date.now(),
  items
});

export const fetchInventoryError = error => ({
  type: actionTypes.FETCH_INVENTORY_ERROR,
  error
});

export const fetchInventory = () => dispatch => {
  dispatch(requestInventory());
  return bffClient
    .getInventory()
    .then((items) => {
      dispatch(receivedInventory(items));
    })
    .catch((error) => {
      console.log('An error occurred while fetching the inventory: ', error);
      dispatch(fetchInventoryError(error));
    })
};

export const checkInventoryEmpty = ({
  inventory: { items }
}) => {
  return (!items || items.length === 0);
};

export const fetchInventoryIfNeeded = () => (dispatch, getState) => {
  if (checkInventoryEmpty(getState())) {
    return dispatch(fetchInventory());
  }
}