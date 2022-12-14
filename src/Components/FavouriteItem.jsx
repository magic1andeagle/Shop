import React from "react";
import { Assets } from "../utils/assets";
import { useDispatch } from "react-redux";
import { addedItemsSlice } from "../store/reducers/addedItemsReducer";

const FavouriteItem = ({ data }) => {
  const dispatch = useDispatch();
  const { deleteFromFavourite } = addedItemsSlice.actions;
  const { favouritesItem } = Assets;
  const { title, price, image, id } = data;

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
              onClick={() => dispatch(deleteFromFavourite(id))}
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
