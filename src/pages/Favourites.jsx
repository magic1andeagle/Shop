import React from "react";
import FavouriteItem from "../Components/FavouriteItem";
import FavouritesState from "../States/FavouritesState";

import "../styles/pages/Favourite.css";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Favourites = observer(() => {
  const { favouriteItems } = FavouritesState;
  const navigate = useNavigate();
  return (
    <div className="favourites-page">
      <div className="favourites-wrapper">
        <p
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Back to shop
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 25 }}>
          <h1 style={{ fontSize: 36 }}>Favourite Items</h1>
          <p style={{ color: 'gray' }}>{favouriteItems.length} items</p>
        </div>
        {favouriteItems.map((item) => (
          <FavouriteItem key={item.id} id={item.id} />
        ))}
        <button onClick={() => FavouritesState.removeAllFavourites()}>
          Очистить избранное
        </button>
      </div>
    </div>
  );
});

export default Favourites;
