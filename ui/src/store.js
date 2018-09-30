import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
// import { fetchInventoryIfNeeded } from './actions'

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));

// store.dispatch(fetchInventoryIfNeeded())
// store
//   .dispatch(fetchInventoryIfNeeded())
//   .then(() => console.log(store.getState()));

export default store;