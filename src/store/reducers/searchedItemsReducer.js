import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedItems: [],
  searchError: "",
};

export const searchedItemsSlice = createSlice({
  name: "searchedItems",
  initialState,
  reducers: {
    searchItems(state, action) {
      state.searchError
        ? (state.searchError = "По вашему запросу ничего не найдено")
        : (state.searchedItems = action.payload);
    },
  },
});

export default searchedItemsSlice.reducer;
