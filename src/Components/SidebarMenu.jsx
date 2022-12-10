import React, { useEffect, useRef } from "react";
import { itemsAPI } from "../services/ItemService";
import SliderWrapper from "./SliderWrapper";
import "../styles/components/Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { itemsSlice } from "../store/reducers/itemsReducer";

const SidebarMenu = () => {
  const { data: categoriesData } = itemsAPI.useFetchCategoriesQuery();
  const { data: initItems } = itemsAPI.useFetchItemsQuery();
  const dispatch = useDispatch();
  const { searchedItems, categoryItems } = useSelector((state) => state.items);
  const {
    setActiveCategories,
    setCategoryItems,
    priceRateFilter,
    setSearchedItems,
  } = itemsSlice.actions;

  const priceSettings = useRef(null);
  const ratingSettings = useRef(null);

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

  //продумать логику

  const onSubmit = () => {
    //if (searchedItems)
    dispatch(setCategoryItems(initItems));
    dispatch(
      priceRateFilter(priceFilterSettings(priceSettings, ratingSettings))
    );
  };

  return (
    <div className="sidebar_menu">
      <div className="sidebar_wrapper">
        <div style={{ marginBottom: "6px" }} className="categories_menu">
          <p style={{ marginBottom: "10px" }}>Категории</p>
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
          <p>Найти</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
