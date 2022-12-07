import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedItems: [],
  loading: false,
  error: "",
};

export const searchedItemsSlice = createSlice({
  name: "searchedItems",
  initialState,
  reducers: {
    searchItems(state, action) {
      state.searchedItems = [...action.payload];
    },
  },
});

export default searchedItemsSlice.reducer;
