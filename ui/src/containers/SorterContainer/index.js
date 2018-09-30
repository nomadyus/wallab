import { connect } from 'react-redux';
import { sortInventory } from '../../actions';
import Sorter from '../../components/Sorter';

const mapStateToProps = (state, ownProps) => ({
  sort: ownProps.sort
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(sortInventory(ownProps.sort,  ownProps.items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sorter);