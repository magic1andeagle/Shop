import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ItemService from "../Components/API/ItemService";
import { useFilter } from "../Components/hooks/useFilter";
import { useSort } from "../Components/hooks/useSort";
import Item from "../Components/Item";
import { categoriesContext, newItemsContext, sportItemsContext } from "../context/context";

import "../styles/MyItem.css";

function Items() {
  const [items, setItems] = useState([])

  const categories = useContext(categoriesContext)
  const newItems = useContext(newItemsContext)

  const getNewItems = async () => {
    const result = await newItems
    setItems([...result])
  }

  useEffect(() => {
    getNewItems()
  }, [])

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSort, setSelectedSort] = useState("title");
  const [filteredSortedItems, setFilteredSortedItems] = useState([]);

  const sortedItems = useSort(items, selectedSort);
  const filteredItems = useFilter(sortedItems, selectedCategory);  

  const setCategoryHandler = (e) => {
    if (selectedCategory.some((category) => category.value == e.target.value)) {
      setSelectedCategory((prev) =>
        prev.filter((elem) => elem.value !== e.target.value)
      );
      return;
    }
    setSelectedCategory([...selectedCategory, { value: e.target.value }]);
  };

  useEffect(() => {
    selectedCategory.length
      ? setFilteredSortedItems(filteredItems)
      : setFilteredSortedItems(sortedItems);
  }, [selectedCategory, selectedSort]);

  return (
    <>
      {}
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="items-container"
      >
        <div className="sort-container">
          <div className="custom-select">
            <select
              defaultValue={`default`}
              onChange={(e) => setSelectedSort(e.target.value)}
            >
              <option disabled value="default">
                Сортировка по:
              </option>
              <option value="price">По цене</option>
              <option value="title">По названию</option>
            </select>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className="items-main">
            {filteredSortedItems.length
              ? filteredSortedItems.map((item) => (
                  <Item key={item.id} data={item} />
                ))
              : items.map((item) => <Item key={item.id} data={item} />)}
          </div>
          <div className="items-categories">
            <h2>Категории</h2>
            <div className="categories">
              {categories.map((category) => {
                return (
                  <div className="category">
                    <label htmlFor={category}>
                      <input
                        onClick={(e) => setCategoryHandler(e)}
                        key={category}
                        id={category}
                        type="checkbox"
                        value={category}
                        style={{ marginRight: "5px" }}
                      ></input>
                      {category}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
