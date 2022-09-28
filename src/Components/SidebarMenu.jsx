import React, { useEffect } from "react";
import { useState } from "react";
import Slider from "./Slider";
import SliderState from "../Components/States/SliderState";

const SidebarMenu = ({ categories, setCategoryHandler }) => {

  const onCategoryClick = (e) => {
    setCategoryHandler(e);
    e.target.classList.toggle("chosen_category");
  };

  return (
    <div className="sidebar_menu">
      <div className="sidebar_wrapper">
        <div style={{ marginBottom: "6px" }} className="categories_menu">
          <p style={{ marginBottom: "10px" }}>Категории</p>
          {categories.length
            ? categories.map((category) => (
                <div
                  key={category}
                  onClick={(e) => onCategoryClick(e)}
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {"< " + category[0].toUpperCase() + category.slice(1)}
                </div>
              ))
            : null}
        </div>
        <div style={{ marginBottom: "20px" }} className="price_menu">
          <p style={{ marginBottom: "15px" }}>Цена</p>
          <Slider
            min={0}
            max={1000}
            type={`price`}
          />
        </div>
        <div style={{ marginBottom: "25px" }} className="rating_menu">
          <p style={{ marginBottom: "15px" }}>Рейтинг товара</p>
          <Slider
            min={1}
            max={5}
            type={`rating`}
          />
        </div>
        <button className="applyButton">
          <p>Найти</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
