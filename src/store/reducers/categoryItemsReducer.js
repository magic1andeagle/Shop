import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryItems: [],
  loading: false,
  error: "",
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoryItems(state, action) {
      if (!state.categoryItems.includes(action.payload)) {
        state.categoryItems = [...state.categoryItems, action.payload];
      } else {
        state.categoryItems = [
          ...state.categoryItems.filter((item) => item !== action.payload),
        ];
      }
    },
  },
});

export default categoriesSlice.reducer;
