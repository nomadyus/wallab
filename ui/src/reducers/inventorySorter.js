import { SortFilters } from '../actions';

const sortFilter = (state = SortFilters.SORT_BY_NAME, action) => {
  switch (action.type) {
    case 'SET_SORT_FILTER':
      return action.sortFilter
    default:
      return state
  }
};

export default sortFilter