import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h3>Booksotre CMS</h3>
    <ul>
      <li>
        <Link to="/">BOOKS</Link>
      </li>
      <li>
        <Link to="/categories">CATEGORIES</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
