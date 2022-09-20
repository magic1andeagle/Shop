import React from "react";
import { useState, useContext } from "react";
import { categoriesContext } from "../context/context";
import Slider from "./Slider";

const SidebarMenu = ({ categories, setCategoryHandler }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const fetchCategories = useContext(categoriesContext);

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
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        <div style={{ marginBottom: "25px" }} className="rating_menu">
          <p style={{ marginBottom: "15px" }}>Рейтинг товара</p>
          <Slider
            min={0}
            max={5}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          ></Slider>
        </div>
        <button className="applyButton">
          <p>Найти</p>
        </button>
      </div>
    </div>
  );
};

export default SidebarMenu;
