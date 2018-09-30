import * as actionTypes from '../actions/types';

const inventory = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INVENTORY:
      return {
        ...state,
        isFetching: true
      };

    case actionTypes.RECEIVED_INVENTORY:
      return {
        ...state,
        isFetching: false,
        items: action.items
      };

    case actionTypes.FETCH_INVENTORY_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state
  }
};

export default inventory