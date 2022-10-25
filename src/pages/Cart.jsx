import React from "react";
import CartItem from "../Components/CartItem";
import { observer } from "mobx-react-lite";

import "../styles/pages/Cart.css";
import CartState from "../States/CartState";

const Cart = observer(() => {
  let { cartItems } = CartState;
  let totalCartValue = 0;

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-main-section">
          <div className="cart-header">
            <h1 style={{ fontSize: 36 }}>Shopping Cart</h1>
            <p className="cart-items-quantity">{cartItems.length} items</p>
          </div>

          {cartItems.map(
            (item) => (
              (totalCartValue += item.price * item.quantity),
              (<CartItem key={item.id} id={item.id} />)
            )
          )}
        </div>
      </div>
      <div className="cart-summary">
        <div className="cart-summary-container">
          <h1 style={{ fontSize: 36, marginBottom: 30 }}>Summary</h1>
          <div style={{ borderTop: "1px solid lightgray", width: "100%" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                color: "#777777",
                marginTop: 20,
              }}
            >
              <h4>Items: {cartItems.length}</h4>
              <h4 className="cart-total-value-num">
                {totalCartValue.toFixed(2) + `$`}
              </h4>
            </div>
            <div className="cart-shipping">
              <h4>Shipping</h4>
              <select className="select-shipping" name="shipping">
                <option disabled value="">Choose Delivery Type</option>
                  <option value="">
                    <p style={{ fontSize: 24 }}>Standart Delivery - $5.00</p>
                  </option>
                  <option value="">International Delivery - $30.00</option>
                  <option value="">Courier Delivery - $15.00</option>
              </select>
            </div>

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
