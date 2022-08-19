import React, { useState } from "react";
import Item from "../Components/Item";
import ItemState from "../Components/States/ItemState";

import "../styles/MyItem.css";

function Items() {
  const [values, setValue] = useState(ItemState.items);

  return (
    <div style={{display: 'flex'}} className="items-container">
      <div className="items-main">
        {values.map((value) => (
          <Item
            key={value.id}
            title={value.title}
            price={value.price}
            id={value.id}
            initialPrice={value.initialPrice}
            quantity={value.quantity}
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
