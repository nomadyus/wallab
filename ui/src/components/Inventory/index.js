import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

const Inventory = ({ items = [] }) => {
  console.log({ this: this, items });
  if (items.length === 0) {
    return (<div className="wide-80 pad-large centered"><p className="text-center">Apologies, there are no items in our inventory, yet!</p></div>);
  }
  else {
    return (
      <div className="wide-80 pad-large centered">
        <ul className="pad-small margin-small half">
          {items.map(item =>
            <Item
              key={item.id}
              {...item}
            />
          )}
        </ul>
      </div>
    )
  };
};

Inventory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Inventory