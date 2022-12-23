import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useDispatch } from "react-redux";
import { addedItemsSlice } from "../../store/reducers/addedItemsReducer";

const Counter = observer(({ getNum, id }) => {
  const dispatch = useDispatch();
  const { deleteFromCart, incrementQuantity, decrementQuantity } =
    addedItemsSlice.actions;
  const [counterValue, setCounterValue] = useState(1);

  const increment = (id) => {
    setCounterValue((prev) => prev + 1);
    dispatch(incrementQuantity(id));
  };

  const decrement = (id) => {
    if (counterValue - 1 === 0) {
      dispatch(deleteFromCart(id));
      return;
    }
    setCounterValue((prev) => prev - 1);
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    getNum(counterValue);
  }, [increment, decrement]);

  return (
    <div className="item-cart-counter">
      <div className="item-cart-counter-container">
        <div onClick={() => decrement(id)} className="counter-button">
          -
        </div>
        <div className="item-cart-counter-value">{counterValue}</div>
        <div onClick={() => increment(id)} className="counter-button">
          +
        </div>
      </div>
    </div>
  );
});

export default Counter;
