import React from "react";
import { Link } from "react-router-dom";
import { Assets } from "./utils/assets";

const Navbar = () => {
    const { catalog, shoppingCartBlack, favourites, contacts } = Assets

  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to="#">
          <div className="nav_item">
            <img alt="" src={catalog}></img>
            <p>Ассортимент</p>
          </div>
        </Link>
        <Link to="#">
          <div className="nav_item">
            <img alt="" src={shoppingCartBlack}></img>
            <p>Корзина</p>
          </div>
        </Link>
        <Link to="#">
          <div className="nav_item">
            <img alt="" src={favourites}></img>
            <p>Избранное</p>
          </div>
        </Link>
        <Link to="#"><div className="nav_item">
            <img alt="" src={contacts}></img>
            <p>Контакты</p>
          </div></Link>
      </div>
    </div>
  );
};

export default Navbar;
