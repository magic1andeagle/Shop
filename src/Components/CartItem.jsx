import React, { useEffect, useRef, useState } from "react";
import ItemState from "../Components/States/ItemState";
import styles from "../styles/Cart.css";
import Counter from "../Components/Counter";
import { observer } from "mobx-react-lite";

import CartState from "./States/CartState";

const CartItem = observer(({ id }) => {
//  const [initialQuantity, setInitialQuantity] = useState(1)
//  const finalItemPrice = ItemState.items[id - 1].price * initialQuantity

//  useEffect(() => {
//    ItemState.setTotalCartValue()
//  }, [finalItemPrice])
  
  return (
    <div className="cart-item" >
      <div className="item-cart-photo"></div>
      <div className="item-cart-info-container">
        <div className="item-cart-title">{CartState.cartItems.find((item) => item.id == id).title}</div>
        <div className="item-cart-price">
          {CartState.cartItems.find((item) => item.id == id).price}
        </div>
      </div>
      <div onClick={() => CartState.removeFromCart(id)} className="delete-cart-item-button">X</div>
    </div>
  );
});

export default CartItem;
