import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Item = ({ availability, name, make, model, year, img }) => (
  <li className="half pad-small inline">
    <div className="wide-100">
      <div className="pad-small centered bordered-item hover-darken">
        <div className="wide-60 pad-x-small inline centered">
          <div className="wide-100 fit-image bg-image" style={{backgroundImage: 'url(' + img + ')'}}></div>
        </div>
        <div className="wide-40 pad-small inline centered align-top">
          <p><span className="small-font gray">Name: </span><strong>{name}</strong></p>
          <p><span className="small-font gray">Make: </span> {make}</p>
          <p><span className="small-font gray">Model: </span> {model}</p>
          <p><span className="small-font gray">Year: </span> {year}</p>
          {availability === 'In Dealership' && <button className="pad-x-small large-font bg-green white rounded centered text-center">BUY</button>}
          {availability !== 'In Dealership' && <p className="large-font light-gray centered text-center">{availability}</p>}
        </div>
      </div>
    </div>
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