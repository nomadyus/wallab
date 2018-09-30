import React from 'react';
import PropTypes from 'prop-types';

const Sorter = ({ sort, options, onChange }) => (
  <div className="">
    <span className="">Sort Inventory By:</span>
    <select onChange={onChange}>
      {options.map(option => {
        if (sort === option) {
          return <option selected>{option}</option>
        } else {
          return <option>{option}</option>
        }
      })}
    </select>
  </div>
);

Sorter.propTypes = {
  sort: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Sorter