import { observer } from "mobx-react-lite";
import React from "react";
import CartState from "../States/CartState";
import FavouritesState from "../States/FavouritesState";
import ItemState from "../States/ItemState";
import { Assets } from "../utils/assets";

const Item = observer(({ data }) => {
  const { title, price, image, rating } = data;
  const { favouritesItem, shoppingCart, star } = Assets;
  const { displayType } = ItemState;

  return (
    <>
      {displayType === "horizBlock" ? (
        <div className="itemHoriz">
          <div className="itemHoriz-container">
            <img
              onClick={() => FavouritesState.addFavourite(data)}
              className="like-item"
              src={favouritesItem}
            />
            <div className="itemHoriz-photo-container">
              <img src={image} />
            </div>
            <div className="itemHoriz-data-container">
              <div className="itemHoriz-data">
                <p className="itemHoriz-title">{title}</p>
                <div className="itemHoriz-info" style={{ marginTop: 15 }}>
                  <div className="itemHoriz-charcs">
                    <p style={{ fontSize: 20, fontWeight: 600 }}>Price</p>
                    <p>{price}$</p>
                  </div>
                  <div className="itemHoriz-charcs">
                    <p>Rating</p>
                    <div>
                      <p
                        style={{
                          color: rating.rate <= 2.5 ? "#EE6C4D" : "#4DEE5D",
                        }}
                      >
                        {rating.rate}
                        <img
                          style={{ paddingLeft: 5, height: "100%" }}
                          src={star}
                          alt=""
                        />
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
                  onClick={() => CartState.addToCart(data)}
                >
                  Add to cart
                  <img style={{ marginLeft: 13 }} src={shoppingCart}></img>
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
                onClick={() => FavouritesState.addFavourite(data)}
                className="like-item"
                src={favouritesItem}
              />
              <div className="item-photo">
                <img src={image} />
              </div>
            </div>
            <div>
              <p className="item-title" style={{ marginBottom: 10 }}>
                {title}
              </p>
            </div>

            <div className="item-data">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                }}
              >
                <p>{price}$</p>
                <div style={{ display: "flex" }}>
                  <img src={star} alt={star} />
                  <p style={{ margin: 0, paddingLeft: 5 }}>{rating.rate}</p>
                </div>
              </div>
              <div className="button-wrapper">
                <button
                  className="item-button"
                  onClick={() => CartState.addToCart(data)}
                >
                  Add to cart
                  <img style={{ marginLeft: 13 }} src={shoppingCart}></img>
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
