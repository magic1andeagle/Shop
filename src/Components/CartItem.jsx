import React, { useContext, useEffect, useRef, useState } from "react";
import ItemState from "../Components/States/ItemState";
import styles from "../styles/Cart.css";
import Counter from "../Components/Counter";
import { observer } from "mobx-react-lite";

import CartState from "./States/CartState";
import { sportItemsContext } from "../context/context";

const CartItem = observer(({ id }) => {
  const { cartItems } = CartState
  const title = cartItems.find((item) => item.id == id).title
  const price = cartItems.find((item) => item.id == id).price
  const data = useContext(sportItemsContext)
  const [currentQuantity, setCurrentQuantity] = useState(1)

  const getCurrentNumber = (currentValue) => {
    setCurrentQuantity(currentValue)
  }

  const [totalItemPrice, setTotalItemPrice] = useState(price * currentQuantity)

  useEffect(() => {
    setTotalItemPrice(price * currentQuantity)
  }, [currentQuantity])
  
  
  return (
    <div className="cart-item" >
      <div className="item-cart-photo"></div>
      <div className="item-cart-info-container">
        <div className="item-cart-title">{title}</div>
        <Counter getNum={getCurrentNumber} id={id} data={data}></Counter>
        <div className="item-cart-price">
          {totalItemPrice}
        </div>
      </div>
      <div onClick={() => CartState.removeFromCart(id, Object.entries(data))} className="delete-cart-item-button">X</div>
    </div>
  );
});

export default CartItem;
