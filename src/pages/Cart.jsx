import React, { useEffect, useRef, useState } from "react";
import ItemState from "../Components/States/ItemState";
import CartItem from "../Components/CartItem";
import { observer } from "mobx-react-lite";

import { sportItemsContext } from "../context/context";
import { useContext } from "react";

import "../styles/Cart.css";
import CartState from "../Components/States/CartState";

const Cart = observer(() => {
  const items = useContext(sportItemsContext)
  let { cartItems } = CartState;
  let totalCartValue = 0

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-main-section">
          <h1 style={{ marginBottom: "30px" }}>Your cart:</h1>
          {cartItems.map((item) => (
              totalCartValue += item.price * item.quantity,
              <CartItem key={item.id} id={item.id} />            
          ))}
        </div>
        <div className="cart-total-container">
          <div
            style={{ fontSize: 34, fontWeight: 700 }}
            className="cart-total-value"
          >
            Total value:
            <h1 className="cart-total-value-num">{totalCartValue}</h1>
            <button onClick={() => CartState.removeAllCart()}>
              Remove All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cart;
