import { connect } from 'react-redux';
import { setSortFilter } from '../../actions';
import Sorter from '../../components/Sorter';

const mapStateToProps = (state, ownProps) => ({
  sortBy: ownProps.sortBy === state.sortBy
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setSortFilter(ownProps.sortBy))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sorter);