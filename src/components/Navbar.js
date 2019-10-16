import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main-navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Ed and Ling">
          <h1 className="title is-4">Edward & Ling</h1>
        </Link>
        <Link className="navbar-item" to="/faq">
          FAQ
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
