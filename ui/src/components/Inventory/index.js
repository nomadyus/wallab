import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

const Inventory = ({ items = [] }) => (
  <ul>
    {items.map(todo =>
      <Item
        key={todo.id}
        {...todo}
      />
    )}
  </ul>
);

Inventory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Inventory