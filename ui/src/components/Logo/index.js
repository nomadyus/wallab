import React, { Component } from 'react';
import logoSvg from './logo.svg';
import './style.css';

class Logo extends Component {
  render() {
    return (
      <div className="centered text-center" tabIndex="0">
        <img src={logoSvg} className="animate-spin square-20" alt="FancyCars" />
        <span className='fancy-font margin-small pad-x-small font-x-large'><i>FancyCars</i></span>
    </div>
    );
  }
}

export default Logo;
