import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Assets } from "../utils/assets";

const Navbar = () => {
  const route = useLocation();
  const { catalog, shoppingCartBlack, favourites, contacts } = Assets;

  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link
          className={`${
            route.pathname == "/" ? "active_page" : null
          } nav_item /`}
          to="/"
        >
          <img alt="" src={catalog}></img>
          <p>Ассортимент</p>
        </Link>
        <Link
          className={`${
            route.pathname == "/cart" ? "active_page" : null
          } nav_item /cart`}
          to="/cart"
        >
          <img alt="" src={shoppingCartBlack}></img>
          <p>Корзина</p>
        </Link>
        <Link
          className={`${
            route.pathname == "/favourites" ? "active_page" : null
          } nav_item /favourites`}
          to="/favourites"
        >
          <img alt="" src={favourites}></img>
          <p>Избранное</p>
        </Link>
        <Link className={`${
            route.pathname == "/about" ? "active_page" : null
          } nav_item /about`} to="/about" style={{marginRight: 0}}>
          <img alt="" src={contacts}></img>
          <p>Контакты</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
