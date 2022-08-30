import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="wrapper">
    <nav className="nav-bar">
      <p>Bookstore CMS</p>
      <ul className="links-nav">
        <li><Link to="/"> Books </Link></li>
        <li><Link to="/Categories"> Categories </Link></li>
      </ul>
    </nav>
  </div>
);

export default NavBar;
