import { createSlice } from "@reduxjs/toolkit";
import { filterItems, useFilter } from "../../hooks/useFilter";

const initialState = {
  activeCategories: [],
  categoryItems: [],
  filteredItems: [],
  //  filterSettings: {
  //    priceFilter: {},
  //    ratingFilter: {},
  //  },
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setActiveCategories(state, action) {
      if (!state.activeCategories.includes(action.payload)) {
        state.activeCategories = [...state.activeCategories, action.payload];
      } else {
        state.activeCategories = [
          ...state.activeCategories.filter((item) => item !== action.payload),
        ];
      }
    },
    setCategoryItems(state, action) {
      state.categoryItems = action.payload.filter((item) =>
        state.activeCategories.some(
          (category) =>
            item.category === category[0].toLowerCase() + category.slice(1)
        )
      );
    },
    //    getFilterSettings(state, action) {
    //      state.filterSettings.priceFilter = action.payload.priceFilter;
    //      state.filterSettings.ratingFilter = action.payload.ratingFilter;
    //    },
    priceRateFilter(state, action) {
      const { minPrice, maxPrice } = action.payload.priceFilter;
      const { minRating, maxRating } = action.payload.ratingFilter;

      if (state.categoryItems.length) {
        const filteredData = filterItems(
          state.categoryItems,
          minPrice,
          maxPrice,
          minRating,
          maxRating
        );
        state.categoryItems = filteredData;
      } else {
      }
    },
  },
});

export default categoriesSlice.reducer;
