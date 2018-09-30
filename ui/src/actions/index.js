import * as actionTypes from './types';
import bffClient from '../services/bffClient';

export const sortInventory = (sort, items) => ({
  type: actionTypes.SORT_BY,
  sort,
  items: items.sort((a, b) => a[sort] - b[sort])
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
      console.log('An error occurred while fetching: ', error);
      dispatch(fetchInventoryError(error));
    })
};

export const checkInventoryEmpty = ({
  items
}) => {
  return (!items || items.length === 0);
};

export const fetchInventoryIfNeeded = () => (dispatch, getState) => {
  if (checkInventoryEmpty(getState())) {
    return dispatch(fetchInventory());
  }
}