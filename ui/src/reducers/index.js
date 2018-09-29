import { combineReducers } from 'redux';
import inventory from './inventory';
import inventorySorter from './inventorySorter';

export default combineReducers({
  inventory,
  inventorySorter
});