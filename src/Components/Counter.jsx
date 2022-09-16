import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import CartState from "./States/CartState";

const Counter = observer(({ getNum, id, data }) => {
  const [counterValue, setCounterValue] = useState(1)

  const increment = (id) => {
    setCounterValue(prev => prev + 1)
    CartState.incrQuantity(id)
  }

  const decrement = (id) => {
    if (counterValue - 1 == 0) {
      CartState.removeFromCart(id)
      return
    }
    setCounterValue(prev => prev - 1)
    CartState.decrQuantity(id)
  }

  useEffect(() => {
    getNum(counterValue)
  }, [increment, decrement])

  return (
    <div className="item-cart-counter">
      <div className="item-cart-counter-container">
        <div onClick={() => decrement(id)} className="counter-button-decrement">
          -
        </div>
        <div className="item-cart-counter-value">{counterValue}</div>
        <div onClick={() => increment(id)} className="counter-button-increment">
          +
        </div>
      </div>
    </div>
  );
});

export default Counter;
