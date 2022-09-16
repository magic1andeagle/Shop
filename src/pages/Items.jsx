import React, { useContext, useEffect, useState } from "react";
import ItemService from "../Components/API/ItemService";
import { useCategory } from "../Components/hooks/useCategory";
import { useFilter } from "../Components/hooks/useFilter";
import { useSort } from "../Components/hooks/useSort";
import Item from "../Components/Item";
import {
  categoriesContext,
  newItemsContext,
  sportItemsContext,
} from "../context/context";

import "../styles/MyItem.css";

function Items() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = useContext(categoriesContext);
  const fetchItems = useContext(newItemsContext);

  const getItems = async () => {
    const result = await fetchItems;
    setItems([...result]);
  };

  const getCategories = async () => {
    const result = await fetchCategories;
    setCategories([...result]);
  };

  useEffect(() => {
    getItems();
    getCategories();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSort, setSelectedSort] = useState("title");
  const [filteredSortedItems, setFilteredSortedItems] = useState([]);

  const sortedItems = useSort(items, selectedSort);
  const filteredItems = useFilter(sortedItems, selectedCategory);

  const onCategoryClick = (e) => {
    setCategoryHandler(e);
    e.target.classList.toggle("chosen_category");
  };

  const setCategoryHandler = (e) => {
    const loweredCat = e.target.innerHTML.slice(5).slice(0, 1).toLowerCase() + e.target.innerHTML.slice(6)
    if (selectedCategory.some((category) => category.value == loweredCat)) {
      setSelectedCategory((prev) =>
        prev.filter((elem) => elem.value !== loweredCat)
      );
      return;
    }
    setSelectedCategory([...selectedCategory, { value: e.target.innerHTML.slice(5).slice(0, 1).toLowerCase() + e.target.innerHTML.slice(6) }]);
  };

  useEffect(() => {
    selectedCategory.length
      ? setFilteredSortedItems(filteredItems)
      : setFilteredSortedItems(sortedItems);
  }, [selectedCategory, selectedSort]);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="items-container"
      >
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
            <div className="price_menu">
              <p>Цена</p>
            </div>
            <div className="rating_menu">
              <p>Рейтинг товара</p>
            </div>
            <button></button>
          </div>
        </div>

        <div className="items-main">
          {filteredSortedItems.length
            ? filteredSortedItems.map((item) => (
                <Item key={item.id} data={item} />
              ))
            : items.map((item) => <Item key={item.id} data={item} />)}
        </div>
      </div>
    </>
  );
}

export default Items;
