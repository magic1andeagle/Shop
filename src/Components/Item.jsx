import React from "react";
import ItemState from "../Components/States/ItemState";

const Item = ({ title, price, id, initialPrice, quantity }) => {
  return (
    <div className="item">
      <div className="item-info-container">
        <div className="item-photo"></div>
        <h3>{title}</h3>
        <h3>{price}p</h3>
        <div className="button-wrapper">
          <button
            onClick={() =>
              ItemState.addToCart(id, price, initialPrice, quantity)
            }
          >
            Add to cart
          </button>
          <button onClick={() => ItemState.addToFavourite(id)}>
            Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
