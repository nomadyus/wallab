// import axios from 'axios'
// import fetch from 'cross-fetch'
import { initialState } from '../reducers/initialState'


const bffClient = {
  getInventory: () => Promise.resolve(initialState)
};

export default bffClient