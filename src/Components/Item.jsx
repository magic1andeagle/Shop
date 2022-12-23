import { observer } from "mobx-react-lite";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addedItemsSlice } from "../store/reducers/addedItemsReducer";
import { Assets } from "../utils/assets";

const Item = observer(({ data }) => {
  const dispatch = useDispatch();
  const { cardType } = useSelector((state) => state.items);
  const { cartItems, favouriteItems } = useSelector(
    (state) => state.addedItems
  );
  const { addToCart, addToFavourite } = addedItemsSlice.actions;
  const { title, price, image, rating, id } = data;
  const { favouritesItem, shoppingCart, star } = Assets;

  return (
    <>
      {cardType === "horizBlock" ? (
        <div className="itemHoriz">
          <div className="itemHoriz-container">
            <img
              onClick={() => {
                if (favouriteItems.some((item) => item.id === id)) {
                  alert("Товар уже добавлен в избранное");
                  return;
                }
                dispatch(addToFavourite(data));
              }}
              className="like-item"
              src={favouritesItem}
              alt=""
            />
            <div className="itemHoriz-photo-container">
              <img src={image} alt="" />
            </div>
            <div className="itemHoriz-data-container">
              <div className="itemHoriz-data">
                <p className="itemHoriz-title">{title}</p>
                <div className="itemHoriz-info">
                  <div className="itemHoriz-charcs">
                    <p className="itemHoriz-price">Price</p>
                    <p>{price}$</p>
                  </div>
                  <div className="itemHoriz-charcs">
                    <p>Rating</p>
                    <div>
                      <p
                        className="itemHoriz_rating"
                        style={{
                          color: rating.rate <= 2.5 ? "#EE6C4D" : "#4DEE5D",
                        }}
                      >
                        {rating.rate}
                        <img className="itemHoriz_star" src={star} alt="" />
                      </p>
                    </div>
                  </div>
                  <div className="itemHoriz-charcs">
                    <p>Available now</p>
                    <p>{rating.count} pcs</p>
                  </div>
                </div>
              </div>
              <div className="itemHoriz-buttons-wrapper">
                <button
                  className="itemHoriz-button"
                  onClick={() => {
                    if (cartItems.some((item) => item.id === id)) {
                      alert("Товар уже добавлен в корзину");
                      return;
                    }
                    dispatch(addToCart(data));
                  }}
                >
                  Add to cart
                  <img className="item_cart" alt="" src={shoppingCart}></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="item">
          <div className="item-container">
            <div>
              <img
                onClick={() => {
                  if (favouriteItems.some((item) => item.id === id)) {
                    alert("Товар уже добавлен в избранное");
                    return;
                  }
                  dispatch(addToFavourite(data));
                }}
                className="like-item"
                src={favouritesItem}
                alt=""
              />
              <div className="item-photo">
                <img src={image} alt="" />
              </div>
            </div>
            <div>
              <p className="item-title">{title}</p>
            </div>

            <div className="item-data">
              <div className="item_data_wrapper">
                <p>{price}$</p>
                <div style={{ display: "flex" }}>
                  <img src={star} alt="" />
                  <p style={{ margin: 0, paddingLeft: 5 }}>{rating.rate}</p>
                </div>
              </div>
              <div className="button-wrapper">
                <button
                  className="item-button"
                  onClick={() => {
                    if (cartItems.some((item) => item.id === id)) {
                      alert("Товар уже добавлен в корзину");
                      return;
                    }
                    dispatch(addToCart(data));
                  }}
                >
                  Add to cart
                  <img className="item_cart" src={shoppingCart} alt=""></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Item;
