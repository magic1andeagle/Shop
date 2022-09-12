import React from "react";
import ItemState from "../Components/States/ItemState";
import CartState from "./States/CartState";
import FavouritesState from "./States/FavouritesState";

const Item = ({ data }) => {
  const { title, price, image } = data;
  console.log(data);
  return (
    <div className="item">
      <div className="item-info-container">
        <div className="item-photo">
          <img src={image}></img>
        </div>
        <h3>{title}</h3>
        <h3>{price}$</h3>
        <div className="button-wrapper">
          <button
            className="item-button"
            onClick={() => CartState.addToCart(data)}
          >
            Add to cart
          </button>
          <button
            className="item-button"
            onClick={() => FavouritesState.addFavourite(data)}
          >
            Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
