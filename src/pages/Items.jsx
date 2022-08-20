import React, { useContext, useState } from "react";
import Item from "../Components/Item";
import ItemState from "../Components/States/ItemState";
import { sportItemsContext } from "../context/context";

import "../styles/MyItem.css";

function Items() {
  const items = useContext(sportItemsContext);

  return (
    <div style={{ display: "flex" }} className="items-container">
      <div className="items-main">
        {Object.entries(items).map((value) => (
          <Item
            key={value[1].id}
            data={value[1]}
          />
        ))}
      </div>
      <div className="items-categories">
        <h2>Категории</h2>
      </div>
    </div>
  );
}

export default Items;
