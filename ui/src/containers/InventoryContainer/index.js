import { connect } from 'react-redux';
import Inventory from '../../components/Inventory';

const mapStateToProps = ({ inventory }) => {
  const {
    isFetching,
    lastUpdated,
    items
  } = inventory || {
    isFetching: false,
    items: []
  };

  return {
    items,
    isFetching,
    lastUpdated
  };
};

export default connect(
  mapStateToProps
  )(Inventory);