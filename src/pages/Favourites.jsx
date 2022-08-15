import React from "react";
import { useState } from "react";
import FavouriteItem from "../Components/FavouriteItem";
import styles from "../styles/Favourite.css";
import ItemState from "../Components/States/ItemState";

const Favourites = () => {
  const [favouriteItems, setFavouriteItems] = useState(
    Object.assign([], ItemState.favouriteItems)
  );

  return (
    <div className="favourites-page">
      <h1 style={{marginBottom: '30px'}}>Избранные товары:</h1>

      {favouriteItems.map((id) => (
        <FavouriteItem setState={setFavouriteItems} state={favouriteItems} id={id} />
      ))}
    </div>
  );
};

export default Favourites;
