import React from "react";
import ItemState from "./States/ItemState";

const FavouriteItem = ({ id, setState, state }) => {

  const deleteItem = () => {
    ItemState.deleteFromFavourites(id);
    setState(state.filter((item) => item !== id))
  };

  return (
    <div className="favourite-item">
      <div className="item-favourite-photo"></div>
      <div className="item-favourite-info-container">
        <div className="item-favourite-title">
          {ItemState.items[id - 1].title}
        </div>
        <div onClick={deleteItem} className="delete-fav-button">
          ❤
        </div>
        <div className="item-favourite-price">
          {ItemState.items[id - 1].price}
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;
