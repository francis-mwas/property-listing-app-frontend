import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/main-logo-3.png';

function Navbar() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img className="header__logo--img" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="btn-nav-toggle">
        <div className="nav-lines">&nbsp;</div>
      </div>
      <ul className="header__nav">
        <li className="header__item">
          <Link to="/" className="header__nav--link header__nav--link-1">
            Home
          </Link>
        </li>
        <li className="header__item">
          <Link to="/" className="header__nav--link">
            Services
          </Link>
        </li>
        <li className="header__item">
          <Link to="#" className="header__nav--link">
            Gallery
          </Link>
        </li>
        <li className="header__item">
          <Link to="#" className="header__nav--link">
            Testimonials
          </Link>
        </li>
        <li className="header__item">
          <Link to="properties.html" className="header__nav--link">
            Properties
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
