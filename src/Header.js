// Header.js

import React from 'react';
import logo from './images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row va-ctr">
          <div className="col-sm-4">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="col-sm-4">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Whitelisting</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-4 text-right">
            <ul className="social">
              <li><a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
