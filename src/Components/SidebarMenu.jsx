import React, { useEffect } from "react";
import { itemsAPI } from "../services/ItemService";
import Slider from "./Slider";
import SliderWrapper from "./SliderWrapper";
import "../styles/components/Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSlice } from "../store/reducers/categoryItemsReducer";

const SidebarMenu = ({ onSubmit }) => {
  const { data: categoriesData } = itemsAPI.useFetchCategoriesQuery();
  const dispatch = useDispatch();
  const { categoryItems } = useSelector((state) => state.categoryItems);
  const { setCategoryItems } = categoriesSlice.actions;

  const onCategoryClick = (e) => {
    e.target.classList.toggle("chosen_category");
    console.log(e.target.innerHTML.slice(5));
    dispatch(setCategoryItems(e.target.innerHTML.slice(5)));
  };

  console.log(categoryItems);

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
        <SliderWrapper />
        <button onClick={() => onSubmit()} className="applyButton">
          <p>Найти</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
