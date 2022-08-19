import React, { useEffect, useRef, useState } from "react";
import ItemState from "../Components/States/ItemState";
import CartItem from "../Components/CartItem";
import { observer } from "mobx-react-lite";

import { Context } from "../context/context";
import { useContext } from "react";

import "../styles/Cart.css";

const Cart = observer(() => {
  const values = useContext(Context)

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-main-section">
          <h1 style={{ marginBottom: "30px" }}>Your cart:</h1>
          {ItemState.cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
            />
          ))}
        </div>
        <div className="cart-total-container">
          <div
            style={{ fontSize: 34, fontWeight: 700 }}
            className="cart-total-value"
          >
            Total value:
            <h1 className="cart-total-value-num">{ItemState.totalCartValue}</h1>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cart;
