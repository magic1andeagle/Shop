import React from "react";
import CartItem from "../Components/CartItem";
import { observer } from "mobx-react-lite";

import "../styles/pages/Cart.css";
import CartState from "../States/CartState";

const Cart = observer(() => {
  let { cartItems } = CartState;
  let totalCartValue = 0
  
  console.log(cartItems)

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
            <h1 className="cart-total-value-num">{totalCartValue.toFixed(2) + `$`}</h1>
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
