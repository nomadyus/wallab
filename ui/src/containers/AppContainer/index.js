import { connect } from 'react-redux';
import App from  '../../components/App';

const mapStateToProps = state => {
  const {
    isFetching,
    lastUpdated,
    items
  } = state || {
    isFetching: true,
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
)(App);