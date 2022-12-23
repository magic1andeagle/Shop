import React from "react";
import FavouriteItem from "../Components/FavouriteItem";

import "../styles/pages/Favourite.css";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addedItemsSlice } from "../store/reducers/addedItemsReducer";

const Favourites = observer(() => {
  const dispatch = useDispatch();
  const { favouriteItems } = useSelector((state) => state.addedItems);
  const { clearFavourites } = addedItemsSlice.actions;
  const navigate = useNavigate();

  return (
    <div className="favourites-page">
      <div className="favourites-wrapper">
        <p className="backToShop" onClick={() => navigate("/")}>
          Back to shop
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: 25,
          }}
        >
          <h1 style={{ fontSize: 36 }}>Favourite Items</h1>
          <div>
            <p style={{ color: "gray" }}>{favouriteItems.length} items</p>
            <button onClick={() => dispatch(clearFavourites())}>
              Очистить избранное
            </button>
          </div>
        </div>
        {favouriteItems.map((item) => (
          <FavouriteItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
});

export default Favourites;
