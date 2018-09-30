import * as types from '../actions/types';
import initialState from './initialState';

const sortFilter = (state = initialState.inventory, action) => {
  switch (action.type) {
    case types.SET_SORT_BY:
      return action.sortBy
    default:
      return state
  }
};

export default sortFilter