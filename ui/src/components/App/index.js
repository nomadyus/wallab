import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SortedInventory from '../../containers/SortedInventory';
import './style.css';

const App = () => (
  <div className="wide-100">
    <Header />
    <div className="wide-100">
      <SortedInventory />
    </div>
    <Footer />
  </div>
);

export default App