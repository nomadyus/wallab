import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { fetchInventoryIfNeeded, sortInventory } from '../../actions'
import './style.css';
import InventoryContainer from '../../containers/InventoryContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log({ props: this.props, a: 'constructor' });
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    console.log({ props: this.props, a: 'componentDidMount' });
    const { dispatch } = this.props;
    dispatch(fetchInventoryIfNeeded());
  }

  componentDidUpdate(prevProps) {
    console.log({ props: this.props, a: 'componentDidUpdate', prevProps });
    const { dispatch } = this.props;
    dispatch(fetchInventoryIfNeeded());
  }

  handleSortChange(sort) {
    console.log({ props: this.props, a: 'handleSortChange' });
    this.props.dispatch(sortInventory(sort, this.props.items));
  }

  render() {
    const { items, sort } = this.props;
    return (
      <div className="wide-100">
        <Header />
        <div className="wide-100">
          <InventoryContainer onSortChange={this.handleSortChange} sort={sort} items={items} />
        </div>
        <Footer />
      </div>
    );
  }
}