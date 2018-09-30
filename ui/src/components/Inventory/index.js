import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

const Inventory = ({ items = [] }) => {
  if (items.length === 0) {
    return (<div className="wide-80 pad-large centered"><p className="text-center">Apologies, there are no items in our inventory, yet!</p></div>);
  }
  else {
    return (
      <ul className="pad-small margin-small">
        {items.map(item =>
          <Item
            key={item.id}
            {...item}
          />
        )}
      </ul>
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