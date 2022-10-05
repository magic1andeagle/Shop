import React, { useContext, useEffect, useState } from "react";
import "../styles/pages/Cart.css";
import Counter from "../Components/Counter";
import { observer } from "mobx-react-lite";

import CartState from "./States/CartState";
import { itemsContext } from "../context/context";
import { Assets } from "./utils/assets";

const CartItem = observer(({ id }) => {
  const { cancelClose } = Assets

  const { cartItems } = CartState
  const title = cartItems.find((item) => item.id == id).title
  const price = cartItems.find((item) => item.id == id).price
  const data = useContext(itemsContext)
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
          {totalItemPrice.toFixed(2) + `$`}
        </div>
      </div>
      <img src={cancelClose} onClick={() => CartState.removeFromCart(id)} className="delete-cart-item-button"></img>
    </div>
  );
});

export default CartItem;
