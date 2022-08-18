import React from "react";
// eslint-disable-next-line
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;