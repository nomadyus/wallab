import { connect } from 'react-redux';
import Inventory from  '../../components/Inventory';
import { SortFilters } from '../../actions';

const getInventory = (inventory, filter) => {
  switch (filter) {
    case SortFilters.SORT_BY_NAME:
      return inventory.sort(a => a.name);
    case SortFilters.SORT_BY_AVAILABILITY:
      return inventory.sort(a => a.availability)
    default:
      console.log('Using default sort');
      return inventory;
  }
};

const mapStateToProps = state => ({
  inventory: getInventory(state.inventory, state.sortFilter)
});

export default connect(
  mapStateToProps
)(Inventory);