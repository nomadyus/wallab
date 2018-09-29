import { connect } from 'react-redux';
import { setSortFilter } from '../../actions';
import Sorter from '../../components/Sorter';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.sortFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: () => dispatch(setSortFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sorter);