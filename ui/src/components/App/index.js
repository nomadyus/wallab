import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import SortedInventory from '../../containers/SortedInventory';
import './style.css';

const App = () => (
  <div className="">
    <Header />
    <SortedInventory />
    <Footer />
  </div>
);

export default App