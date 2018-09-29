import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ availability, text }) => (
  <li className="">
    {text}
    {availability}
  </li>
);

Item.propTypes = {
  availability: PropTypes.bool.isRequired
};

export default Item