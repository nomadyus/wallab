import * as actionTypes from './types';

export const sortBy = (sort, items) => ({
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
})

export const fetchInventory = () => {
  return (dispatch) => {
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
}