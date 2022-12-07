import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { itemsAPI } from "../services/ItemService";
import categoriesReducer from "./reducers/categoryItemsReducer";
import searchedItemsReducer from "./reducers/searchedItemsReducer";

const rootStore = combineReducers({
  //  items: initItemsReducer,
  searchedItems: searchedItemsReducer,
  categoryItems: categoriesReducer,
  [itemsAPI.reducerPath]: itemsAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootStore,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(itemsAPI.middleware),
  });
