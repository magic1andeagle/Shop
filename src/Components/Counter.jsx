import React from "react";
import { useState } from "react";
import ItemState from "./States/ItemState";
import { observer } from "mobx-react-lite";

const Counter = observer(({ id, setInitialQuantity }) => {
  const [counterValue, setCounterValue] = useState(1);

  const index = ItemState.cartItems.findIndex((item) => item.id == id)

  const increment = (id) => {
    ItemState.increment(id)
    ItemState.changePrice(id)
  };
  const decrement = (id) => {
    ItemState.decrement(id)
  };

  return (
    <div className="item-cart-counter">
      <div className="item-cart-counter-container">
        <div onClick={() => decrement(id)} className="counter-button-decrement">
          -
        </div>
        <div className="item-cart-counter-value">{ItemState.cartItems[index].quantity}</div>
        <div onClick={() => increment(id)} className="counter-button-increment">
          +
        </div>
      </div>
    </div>
  );
});

export default Counter;
