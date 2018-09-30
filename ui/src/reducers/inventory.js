import * as actionTypes from '../actions/types';

const inventory = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INVENTORY:
      return {
        isFetching: true
      };

    case actionTypes.RECEIVED_INVENTORY:
      return {
        isFetching: false,
        items: action.items
      };

    case actionTypes.FETCH_INVENTORY_ERROR:
      return {
        isFetching: false,
        error: action.error,
      };

    case actionTypes.SORT_INVENTORY:
      return {
        sort: action.sort,
        items: action.items
      }
    default:
      return state
  }
};

export default inventory