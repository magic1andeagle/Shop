import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useCategory } from "../hooks/useCategory";
import Item from "../Components/Item";
import SidebarMenu from "../Components/SidebarMenu";
import SliderState from "../States/SliderState";
import TopbarMenu from "../Components/TopbarMenu";
import { categoriesContext, itemsContext } from "../context/context";
import ItemState from "../States/ItemState";

import "../styles/pages/MyItem.css";
import { Assets } from "../utils/assets";

const Items = observer(() => {
  const [items, setItems] = useState([]);
  const [catItems, setCatItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const { minPrice, maxPrice, minRating, maxRating } = SliderState;
  const { updateItems, initItems, setCategoryItems, categoryItems } = ItemState;
  const { paginationButton } = Assets;

  const fetchCategories = useContext(categoriesContext);
  const fetchItems = useContext(itemsContext);
  const getCategoryItems = useCategory(initItems, selectedCategory);

  const filterItems = () => {
    if (selectedCategory.length) {
      let arr = catItems.filter(
        (item) =>
          item.price >= minPrice &&
          item.price <= maxPrice &&
          item.rating.rate >= minRating &&
          item.rating.rate <= maxRating
      );
      setItems(arr);
      setCategoryItems(arr);
    } else {
      setItems(
        initItems.filter(
          (item) =>
            item.price >= minPrice &&
            item.price <= maxPrice &&
            item.rating.rate >= minRating &&
            item.rating.rate <= maxRating
        )
      );
    }
  };

  const setCategoryHandler = (e) => {
    const loweredCat =
      e.target.innerHTML.slice(5).slice(0, 1).toLowerCase() +
      e.target.innerHTML.slice(6);
    if (selectedCategory.some((category) => category.value == loweredCat)) {
      setSelectedCategory((prev) =>
        prev.filter((elem) => elem.value !== loweredCat)
      );
      return;
    }
    setSelectedCategory([
      ...selectedCategory,
      {
        value:
          e.target.innerHTML.slice(5).slice(0, 1).toLowerCase() +
          e.target.innerHTML.slice(6),
      },
    ]);
  };

  const onSubmit = () => {
    filterItems();
  };

  const getItems = async () => {
    const result = await fetchItems;
    setItems([...result]);
    updateItems(result);
  };

  const getCategories = async () => {
    const result = await fetchCategories;
    setCategories([...result]);
  };

  useEffect(() => {
    getItems();
    getCategories();
  }, []);

  useEffect(() => {
    setCategoryItems(getCategoryItems);
    setCatItems(getCategoryItems);
  }, [selectedCategory]);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="items-wrapper"
      >
        <SidebarMenu
          categories={categories}
          setCategoryHandler={setCategoryHandler}
          onSubmit={onSubmit}
        />
        <div className="items-container">
          <TopbarMenu
            setState={setItems}
            items={selectedCategory.length ? categoryItems : items}
          />
          <div className="items-main">
            {items.length ? (
              items.map((item) => <Item key={item.id} data={item} />)
            ) : (
              <div style={{ width: "100%", textAlign: "center", marginBottom: 15 }}>
                <h1>По вашему запросу ничего не найдено</h1>
              </div>
            )}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {items.length ? <img src={paginationButton} alt="paginationButton" /> : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Items;
