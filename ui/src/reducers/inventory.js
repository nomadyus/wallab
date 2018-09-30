import * as types from '../actions/types';
import initialState from './initialState';

const inventory = (state = initialState.inventory, action) => {
  switch (action.type) {
    case types.FETCH_ITEMS_SUCCESS:
      return action.items
    case types.FETCH_ITEM_AVAILABILITY_SUCCESS:
      return action.items
    default:
      return state
  }
};

export default inventory