import React from "react";
import { Link } from "react-router-dom";

import "../styles/components/Header.css";
import "../styles/components/Navbar.css";
import Navbar from "./Navbar";
import { Assets } from "../utils/assets";

const Header = () => {
  const { shopLogo } = Assets;

  return (
    <div className="header">
      <div className="header_container">
        <Link className="title" to="/">
          <div className="header_title_container">
            <h1 className="header_title">MAGIC.SHOP</h1>
            <img src={shopLogo}></img>
          </div>
        </Link>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
