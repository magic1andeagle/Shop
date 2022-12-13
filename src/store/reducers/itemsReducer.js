import { createSlice } from "@reduxjs/toolkit";
import { filterItems } from "../../hooks/useFilter";

const initialState = {
  initialItems: [],
  filteredItems: [],
  activeCategories: [],
  categoryItems: [],
  searchedItems: [],
  searchError: "",
  areFiltersSet: false,
};

export const itemsSlice = createSlice({
  name: "itemsSlice",
  initialState,
  reducers: {
    setInitialItems(state, action) {
      state.initialItems = action.payload;
    },
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
    priceRateFilter(state, action) {
      const { minPrice, maxPrice } = action.payload.priceFilter;
      const { minRating, maxRating } = action.payload.ratingFilter;

      if (state.searchedItems?.length) {
        const filteredData = filterItems(
          state.searchedItems,
          minPrice,
          maxPrice,
          minRating,
          maxRating
        );
        state.filteredItems = filteredData;
        state.searchedItems = filteredData;
        return;
      }
      if (state.categoryItems.length) {
        const filteredData = filterItems(
          state.categoryItems,
          minPrice,
          maxPrice,
          minRating,
          maxRating
        );
        state.filteredItems = filteredData;
      } else {
        const filteredData = filterItems(
          state.initialItems,
          minPrice,
          maxPrice,
          minRating,
          maxRating
        );
        state.filteredItems = filteredData;
      }
    },
    setSearchedItems(state, action) {
      state.searchedItems = action.payload;
      state.filteredItems = action.payload;
    },
    setFilteredItems(state, action) {
      state.filteredItems = action.payload;
    },
    setFiltersState(state, action) {
      state.areFiltersSet = action.payload;
    },
  },
});

export default itemsSlice.reducer;
