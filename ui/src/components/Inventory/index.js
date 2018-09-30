import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchInventoryIfNeeded, sortInventory } from '../../actions'
import Item from '../Item';
import { SORT_OPTIONS } from '../../constants';

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchInventoryIfNeeded());
  }

  componentDidUpdate() {
    const { dispatch } = this.props;
    dispatch(fetchInventoryIfNeeded());
  }

  handleSortChange(e) {
    const { dispatch, items } = this.props;
    dispatch(sortInventory(e.target.value, items));
  }

  render() {
    const { items = [], sort, isFetching } = this.props;
    return (
      <div className="wide-80 pad-large centered">
        {isFetching && items.length === 0 && <p className="text-center">Loading the inventory...</p>}
        {!isFetching && items.length === 0 && <p className="text-center">Apologies, there are no items in our inventory, yet!</p>}
        {
          items.length > 0 &&
          <div className="wide-100">
            <div className="wide-100">
              <span className="wide-90">Sort Inventory By:</span>
              <select onChange={this.handleSortChange}>
                {SORT_OPTIONS.map(option => {
                  if (sort === option) {
                    return <option selected key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>
                  } else {
                    return <option key={option.toLowerCase()} value={option.toLowerCase()}>{option}</option>
                  }
                })}
              </select>
            </div>

            <ul className="pad-small margin-small wide-90">
              {items.map(item => <Item key={item.id} {...item} />)}
            </ul>
          </div>
        }
      </div>
    )
  };
}

Inventory.propTypes = {
  items: PropTypes.array
};