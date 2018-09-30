import { connect } from 'react-redux';
import Inventory from  '../../components/Inventory';
import * as types from '../../actions/types';

const getInventory = (items, sortBy) => {
  switch (sortBy) {
    case types.SORT_BY_NAME:
      return items.sort(a => a.name);
    case types.SORT_BY_AVAILABILITY:
      return items.sort(a => a.availability)
    default:
      console.log('No "Sort By" so using default list.');
      return items;
  }
};

const mapStateToProps = state => ({
  items: getInventory(state.items, state.sortBy)
});

export default connect(
  mapStateToProps
)(Inventory);