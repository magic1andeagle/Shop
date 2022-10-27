import React, { useState } from "react";
import CartItem from "../Components/CartItem";
import { observer } from "mobx-react-lite";

import "../styles/pages/Cart.css";
import CartState from "../States/CartState";

const Cart = observer(() => {
  let { cartItems } = CartState;
  let totalCartValue = 0;

  const [input, setInput] = useState("");
  const [shippingPrice, setShippingPrice] = useState({ value: 0 });

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
          <div style={{ borderTop: "1px solid gray", width: "100%" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                color: "#777777",
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              <h4>Items: {cartItems.length}</h4>
              <h4 className="cart-total-value-num">
                {totalCartValue.toFixed(2) + `$`}
              </h4>
            </div>
            <div className="cart-shipping">
              <form action="">
                <h4 style={{ marginBottom: 15 }}>Shipping</h4>
                <select
                  className="select-shipping"
                  name="shipping"
                  defaultValue={shippingPrice.value}
                  onChange={(e) =>
                    setShippingPrice({ value: Number(e.target.value) })
                  }
                >
                  <option disabled value={0}>
                    Choose Delivery Type
                  </option>
                  <option value={5} onClick={(e) => console.log(e.target)}>
                    Standart Delivery - $5.00
                  </option>
                  <option value={30}>International Delivery - $30.00</option>
                  <option value={15}>Courier Delivery - $15.00</option>
                </select>
              </form>
            </div>
            <div style={{ marginBottom: 30 }} className="cart-coupon">
              <h4 style={{ marginBottom: 15 }}>Coupon</h4>
              <input
              className="cart-coupon-input"
                type="text"
                placeholder="Enter your coupon"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="cart-total-price"
            >
              <h4 style={{ marginTop: 15 }}>Total price</h4>
              <h4 style={{ marginTop: 15 }}>
                {totalCartValue.toFixed(2) + `$`}
              </h4>
            </div>

            <button className="chechkout-button" style={{ marginTop: 60 }} onClick={() => CartState.removeAllCart()}>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cart;
