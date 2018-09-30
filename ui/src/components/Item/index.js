import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ availability, name, make, model, year, img }) => (
  <li className="half pad-small hover-grow hover-shadow">
    {name}
    {make}
    {model}
    {year}
    {img}
    {availability}
  </li>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired
};

export default Item