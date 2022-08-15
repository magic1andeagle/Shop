import React, { useEffect, useRef, useState } from "react";
import ItemState from "../Components/States/ItemState";
import styles from "../styles/Cart.css";
import Counter from "../Components/Counter";
import { observer } from "mobx-react-lite";

const CartItem = observer(({ id }) => {
  const [initialQuantity, setInitialQuantity] = useState(1)
  const finalItemPrice = ItemState.items[id - 1].price * initialQuantity

  useEffect(() => {
    ItemState.setTotalCartValue()
  }, [finalItemPrice])
  
  return (
    <div className="cart-item" key={id}>
      <div className="item-cart-photo"></div>
      <div className="item-cart-info-container">
        <div className="item-cart-title">{ItemState.items[id - 1].title}</div>
        <Counter setInitialQuantity={setInitialQuantity} id={id}/>
        <div className="item-cart-price">
          {ItemState.items[id - 1].price}
        </div>
      </div>
      <div onClick={() => ItemState.deleteFromCart(id)} className="delete-cart-item-button">X</div>
    </div>
  );
});

export default CartItem;
