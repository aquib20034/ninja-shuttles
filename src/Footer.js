// Footer.js

import React from 'react';
import logo from './images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row va-ctr">
          <div className="col-sm-6">
            <p>&copy; Copyright Whitelisting</p>
          </div>
          <div className="col-sm-6 text-right">
            <ul className="social">
              <li><a href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
