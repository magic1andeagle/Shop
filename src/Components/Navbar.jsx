import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.css";
import SearchQuery from "./SearchQuery";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link
      className="title"
      to='/'
      style={{ textDecoration: "none", color: 'gold', fontSize: 34, paddingLeft: 30 }}
      >DAILYSHOP</Link>
      <SearchQuery />
      <div className="navbar__links_container">
        <Link 
          className="navbar-link" 
          to="/" 
          style={{ textDecoration: "none" }}
          >
          Sign in
        </Link>
        <a 
          className="navbar-link" 
          href="#" 
          style={{ textDecoration: "none" }}
          >
          Country
        </a>
        <Link 
          className="navbar-link" 
          to='/favourites'
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
