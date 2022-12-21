import React, { useEffect, useState } from "react";
import "../styles/pages/Cart.css";
import Counter from "../Components/Counter";
import { observer } from "mobx-react-lite";

import CartState from "../States/CartState";
import { Assets } from "../utils/assets";
import { useDispatch, useSelector } from "react-redux";
import { addedItemsSlice } from "../store/reducers/addedItemsReducer";

const CartItem = observer(({ id }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.addedItems);
  const { deleteFromCart } = addedItemsSlice.actions;
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const { cancelClose } = Assets;
  // const { cartItems } = CartState;
  const { title, price, data, image, category } = cartItems.find(
    (item) => item.id === id
  );

  const getCurrentNumber = (currentValue) => {
    console.log(cartItems[0].price * currentQuantity);
    setCurrentQuantity(currentValue);
  };

  const [totalItemPrice, setTotalItemPrice] = useState(price * currentQuantity);

  useEffect(() => {
    setTotalItemPrice(price * currentQuantity);
  }, [currentQuantity]);

  return (
    <div className="cart-item">
      <div className="cart-item-container">
        <div className="item-cart-photo">
          <img src={image} alt="itemphoto" />
        </div>
        <div className="item-cart-info-container">
          <div className="item-cart-title">
            <p style={{ color: "gray", marginBottom: 5, fontSize: 22 }}>
              {category[0].toUpperCase() + category.slice(1)}
            </p>
            <p style={{ fontSize: 24, fontWeight: 600 }}>{title}</p>
          </div>
          <div style={{ display: "flex" }}>
            <Counter getNum={getCurrentNumber} id={id} data={data}></Counter>
            <div className="item-cart-price">
              {totalItemPrice.toFixed(2) + `$`}
            </div>
          </div>
        </div>
        <img
          src={cancelClose}
          onClick={() => dispatch(deleteFromCart(id))}
          className="delete-cart-item-button"
        ></img>
      </div>
    </div>
  );
});

export default CartItem;
