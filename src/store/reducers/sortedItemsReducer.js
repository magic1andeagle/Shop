import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredItems: [],
};

export const sortedItemsSlice = createSlice({
  name: "sortedItems",
  initialState,
  reducers: {
    priceRateFilter(state, payload) {},
  },
});
