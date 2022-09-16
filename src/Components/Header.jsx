import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";
import "../styles/Navbar.css";
import shop_logo from "../img/shop_logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <Link className="title" to="/">
          <div className="header_title_container">
            <h1 className="header_title">MAGIC.SHOP</h1>
            <img src={shop_logo}></img>
          </div>
        </Link>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
