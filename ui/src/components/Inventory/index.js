import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

const Inventory = ({ items = [] }) => (
  <ul className="pad-small margin-small">
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
      />
    )}
  </ul>
);

Inventory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Inventory