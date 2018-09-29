import React, { Component } from 'react';
import logoSvg from './logo.svg';
import './style.css';

class Logo extends Component {
  render() {
    return (
      <div className="logo" tabIndex="0">
        <img src={logoSvg} className="logo-svg" alt="FancyCars" />
        <span className='logo-text'>FancyCars</span>
    </div>
    );
  }
}

export default Logo;
