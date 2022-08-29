import React, { useContext, useEffect, useState } from "react";
import Item from "../Components/Item";
import ItemState from "../Components/States/ItemState";
import { categoriesContext, sportItemsContext } from "../context/context";

import "../styles/MyItem.css";

function Items() {
  const items = useContext(sportItemsContext);
  const categories = useContext(categoriesContext);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSort, setSelectedSort] = useState(null);

  const [filteredSortedItems, setFilteredSortedItems] = useState([]);

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
    setFilteredSortedItems(
      items.filter((item) => {
        if (
          selectedCategory.some((category) => category.value == item.category)
        ) {
          return item;
        }
      })
    );
  }, [selectedCategory]);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-between" }}
      className="items-container"
    >
      <div className="sort-container">
        <div className="custom-select" style={{ width: "200px" }}>
          <select defaultValue='default'>
            <option disabled value="default">Сортировка:</option>
            <option value="price">По цене</option>
            <option value="name">По названию</option>
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
  );
}

export default Items;
