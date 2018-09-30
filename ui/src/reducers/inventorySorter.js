import * as types from '../actions/types';

const inventorySorter = (state = {}, action) => {
  switch (action.type) {
    case types.SORT_BY:
      return {
        ...state,
        items: action.items.sort(a => a[action.sortBy])
      }
    default:
      return state
  }
};

export default inventorySorter