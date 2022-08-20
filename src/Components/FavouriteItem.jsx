import React from "react";
import FavouritesState from "./States/FavouritesState";
import ItemState from "./States/ItemState";

const FavouriteItem = ({ id }) => {

  return (
    <div className="favourite-item">
      <div className="item-favourite-photo"></div>
      <div className="item-favourite-info-container">
        <div className="item-favourite-title">
          {FavouritesState.favouriteItems.find((item) => item.id == id).title}
        </div>
        <div onClick={() => FavouritesState.removeFavourite(id)} className="delete-fav-button">
          ❤
        </div>
        <div className="item-favourite-price">
          {FavouritesState.favouriteItems.find((item) => item.id == id).price}
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;
