import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import './style.css';
import InventoryContainer from '../../containers/InventoryContainer';

export default class App extends Component {
  render() {
    const { items, sort } = this.props;
    return (
      <div className="wide-100 high-100v high-100">
        <Header />
        <InventoryContainer sort={sort} items={items} />
        <Footer />
      </div>
    );
  }
}