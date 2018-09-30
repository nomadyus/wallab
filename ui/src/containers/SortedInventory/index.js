import { connect } from 'react-redux';
import Inventory from  '../../components/Inventory';
import * as types from '../../actions/types';

const getInventory = (inventory, sortBy) => {
  switch (sortBy) {
    case types.SORT_BY_NAME:
      return inventory.sort(a => a.name);
    case types.SORT_BY_AVAILABILITY:
      return inventory.sort(a => a.availability)
    default:
      console.log('No "Sort By" so using default list.');
      return inventory;
  }
};

const mapStateToProps = state => ({
  inventory: getInventory(state.inventory, state.sortBy)
});

export default connect(
  mapStateToProps
)(Inventory);