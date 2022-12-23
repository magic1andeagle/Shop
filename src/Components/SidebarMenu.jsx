import React, { useRef } from "react";
import { itemsAPI } from "../services/ItemService";
import SliderWrapper from "./SliderWrapper";
import "../styles/components/Categories.css";
import { useDispatch } from "react-redux";
import { itemsSlice } from "../store/reducers/itemsReducer";

const SidebarMenu = () => {
  const { data: categoriesData } = itemsAPI.useFetchCategoriesQuery();
  const { data: initItems } = itemsAPI.useFetchItemsQuery();
  const dispatch = useDispatch();
  const {
    setActiveCategories,
    setCategoryItems,
    priceRateFilter,
    setFiltersState,
  } = itemsSlice.actions;

  const priceSettings = useRef(null);
  const ratingSettings = useRef(null);

  const defaultSettings = {
    priceFilter: {
      minPrice: 0,
      maxPrice: 1000,
    },
    ratingFilter: {
      minRating: 1,
      maxRating: 5,
    },
  };

  const onCategoryClick = (e) => {
    e.target.classList.toggle("chosen_category");
    console.log(e.target.innerHTML.slice(5));
    dispatch(setActiveCategories(e.target.innerHTML.slice(5)));
  };

  const priceFilterSettings = (priceSettings, ratingSettings) => ({
    priceFilter: {
      minPrice: priceSettings.current.minValue,
      maxPrice: priceSettings.current.maxValue,
    },
    ratingFilter: {
      minRating: ratingSettings.current.minValue,
      maxRating: ratingSettings.current.maxValue,
    },
  });

  const isDefault = (def, current) => {
    if (JSON.stringify(def) === JSON.stringify(current)) {
      dispatch(setFiltersState(false)); // means that filters are set to default
    } else dispatch(setFiltersState(true));
  };

  //продумать логику

  const onSubmit = () => {
    isDefault(
      defaultSettings,
      priceFilterSettings(priceSettings, ratingSettings)
    );
    dispatch(setCategoryItems(initItems));
    //  if (searchedItems?.length) {
    //    dispatch(setCategoryItems(searchedItems));
    //  }
    dispatch(
      priceRateFilter(priceFilterSettings(priceSettings, ratingSettings))
    );
  };

  return (
    <div className="sidebar_menu">
      <div className="sidebar_wrapper">
        <div style={{ marginBottom: "6px" }} className="categories_menu">
          <p style={{ marginBottom: "10px" }}>Categories</p>
          {categoriesData?.length &&
            categoriesData.map((category) => (
              <div
                key={category}
                className={`category`}
                onClick={(e) => onCategoryClick(e)}
              >
                <p>{"< " + category[0].toUpperCase() + category.slice(1)}</p>
              </div>
            ))}
        </div>
        <SliderWrapper
          priceSettings={priceSettings}
          ratingSettings={ratingSettings}
        />
        <button onClick={() => onSubmit()} className="applyButton">
          <p>Search</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
