import React from 'react';
import PropTypes from 'prop-types';

const Sorter = ({ active, choices = [], onChange }) => (
  <select onChange={onChange} disabled={active}>
    {choices.map(choice => {
      <option>choice</option>
    })}
  </select>
);

Sorter.propTypes = {
  sortFilter: PropTypes.bool.isRequired,
  choices: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Sorter