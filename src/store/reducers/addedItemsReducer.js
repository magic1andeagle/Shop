import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  favouriteItems: [],
};

export const addedItemsSlice = createSlice({
  name: "addedItems",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },
    deleteFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    addToFavourite(state, action) {
      state.favouriteItems = [...state.favouriteItems, action.payload];
    },
    deleteFromFavourite(state, action) {
      state.favouriteItems = state.favouriteItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearFavourites(state) {
      state.favouriteItems = [];
    },
    incrementQuantity(state, action) {
      state.cartItems.find((item) => item.id === action.payload).quantity =
        state.cartItems.find((item) => item.id === action.payload).quantity + 1;
    },
    decrementQuantity(state, action) {
      state.cartItems.find((item) => item.id === action.payload).quantity =
        state.cartItems.find((item) => item.id === action.payload).quantity - 1;
    },
  },
});

export default addedItemsSlice.reducer;
