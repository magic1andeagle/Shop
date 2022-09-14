import React from "react";
import { Link } from "react-router-dom";
import SearchQuery from "./SearchQuery";

import "../styles/Header.css";
import "../styles/Navbar.css";
import shop_logo from "../img/shop_logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_title_container">
          <Link className="title" to="/">
            <h1 className="header_title">MAGIC.SHOP</h1>
            <img src={shop_logo}></img>
          </Link>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
