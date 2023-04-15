import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-contents">
      <h3>Bookstore CMS</h3>
      <ul>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li className="category">
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </div>
    <div className="oval">
      <FontAwesomeIcon icon={faUser} className="Mask" style={{ color: '#0290ff' }} />
    </div>
  </nav>
);

export default Navbar;
