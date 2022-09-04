import React from "react";
import { Link } from "react-router-dom";
import SearchQuery from "./SearchQuery";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left-container">
        <Link
          className="title"
          to="/"
          style={{
            textDecoration: "none",
            color: "gold",
            fontSize: 34,
            paddingLeft: 20,
          }}
        >
          DAILYSHOP
        </Link>
        <SearchQuery />
      </div>

      <div className="navbar__links_container">
        <Link className="navbar-link" to="/" style={{ textDecoration: "none" }}>
          Sign in
        </Link>
        <a className="navbar-link" href="#" style={{ textDecoration: "none" }}>
          Country
        </a>
        <Link
          className="navbar-link"
          to="/favourites"
          style={{ textDecoration: "none" }}
        >
          Favourites
        </Link>
        <Link
          className="navbar-link"
          to="/cart"
          style={{ textDecoration: "none" }}
        >
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
