import React from "react";
import ItemState from "../Components/States/ItemState";
import CartState from "./States/CartState";
import FavouritesState from "./States/FavouritesState";
import shoppingCart from "../img/shopping_cart.svg";

const Item = ({ data }) => {
  const { title, price, image } = data;
  console.log(data);
  return (
    <div className="item">
      <div className="item-info-container">
        <div className="item-photo">
          <img src={image}></img>
        </div>
        <p>{title}</p>
        <p>{price}$</p>
        <div className="button-wrapper">
          <button
            className="item-button"
            onClick={() => CartState.addToCart(data)}
          >
            Add to cart
            <img style={{marginLeft: 13}} src={shoppingCart}></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
