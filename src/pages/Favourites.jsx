import React from "react";
import FavouriteItem from "../Components/FavouriteItem";

import FavouritesState from '../States/FavouritesState'

import "../styles/pages/Favourite.css";
import { observer } from "mobx-react-lite";

const Favourites = observer(() => {

  return (
    <div className="favourites-page">
      <h1 style={{marginBottom: '30px'}}>Избранные товары:</h1>
      {FavouritesState.favouriteItems.map((item) => (
        <FavouriteItem key={item.id} id={item.id} />
      ))}
      <button onClick={() => FavouritesState.removeAllFavourites()}>Очистить избранное</button>
    </div>
  );
});

export default Favourites;
