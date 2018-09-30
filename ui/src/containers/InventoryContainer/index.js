import { connect } from 'react-redux';
import Inventory from  '../../components/Inventory';

const mapStateToProps = state => {
  const {
    items
  } = state || {
    items: []
  };

  return {
    items
  };
};

export default connect(
  mapStateToProps
)(Inventory);