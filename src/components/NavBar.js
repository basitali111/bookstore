import React from 'react';
import { Link } from 'react-router-dom';
import userLogo from '../assets/user.png';

const NavBar = () => (
  <div className="wrapper">
    <nav className="nav-bar">
      <p>Bookstore CMS</p>
      <ul className="links-nav">
        <li><Link to="/" className="nav-link"> Books </Link></li>
        <li><Link to="/Categories" className="nav-link"> Categories </Link></li>
      </ul>
      <div className="user-logo">
        <img className="userlogo" src={userLogo} alt="user icon" />
      </div>
    </nav>
  </div>
);

export default NavBar;
