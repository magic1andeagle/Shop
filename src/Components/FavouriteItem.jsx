import React from "react";
import FavouritesState from "../States/FavouritesState";
import { Assets } from "../utils/assets";

const FavouriteItem = ({ id }) => {
  const { favouriteItems, removeFavourite } = FavouritesState;
  const { favouritesItem } = Assets;
  const { title, price, data, image, category } = favouriteItems.find(
    (item) => item.id === id
  );

  return (
    <div className="favourite-item">
      <div style={{ display: "flex", padding: 15, width: "100%" }}>
        <div className="item-favourite-photo">
          <img src={image} alt="favItemImage" />
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="item-favourite-info-container"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            <div className="item-favourite-title">
              <p style={{ fontSize: 24, fontWeight: 600 }}>{title}</p>
            </div>
            <div className="item-favourite-price">${price}</div>
          </div>

          <div className="delete-fav-button">
            <img
              style={{ cursor: "pointer" }}
              onClick={() => removeFavourite(id)}
              src={favouritesItem}
              alt="favItemDel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouriteItem;
