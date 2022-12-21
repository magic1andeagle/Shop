import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { itemsAPI } from "../services/ItemService";
import addedItemsReducer from "./reducers/addedItemsReducer";
import itemsReducer from "./reducers/itemsReducer";

const rootStore = combineReducers({
  items: itemsReducer,
  addedItems: addedItemsReducer,
  [itemsAPI.reducerPath]: itemsAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootStore,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(itemsAPI.middleware),
  });
