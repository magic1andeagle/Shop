import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useRef, useState } from "react";
import ItemService from "../Components/API/ItemService";
import { useCategory } from "../Components/hooks/useCategory";
import { useFilter } from "../Components/hooks/useFilter";
import { useSort } from "../Components/hooks/useSort";
import Item from "../Components/Item";
import SidebarMenu from "../Components/SidebarMenu";
import Slider from "../Components/Slider";
import SliderState from "../Components/States/SliderState";
import TopbarMenu from "../Components/TopbarMenu";
import {
  categoriesContext,
  newItemsContext,
  sportItemsContext,
} from "../context/context";

import "../styles/MyItem.css";

const Items = observer(() => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSort, setSelectedSort] = useState("title");
  const [filteredSortedItems, setFilteredSortedItems] = useState([]);

  const { minPrice, maxPrice } = SliderState

  const fetchCategories = useContext(categoriesContext);
  const fetchItems = useContext(newItemsContext);
  const sortedItems = useSort(items, selectedSort);
  const filteredItems = useFilter(sortedItems, selectedCategory);

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

  const setPriceRange = () => {
    filteredSortedItems.length
      ? console.log(
        filteredSortedItems.filter((item) => item.price >= minPrice && item.price <= maxPrice)
      )
     // setFilteredSortedItems(
     //   filteredSortedItems.filter(
     //     (item) => item.price >= minPrice && item.price <= maxPrice
     //   )
     // )
      : console.log(
        items.filter((item) => item.price >= minPrice && item.price <= maxPrice)
      )
        //setFilteredSortedItems(
        //  items.filter(
        //    (item) => item.price >= minPrice && item.price <= maxPrice
        //  )
        //);
  };

  const getItems = async () => {
    const result = await fetchItems;
    setItems([...result]);
  };

  const getCategories = async () => {
    const result = await fetchCategories;
    setCategories([...result]);
  };

  useEffect(() => {
    setPriceRange()
  }, [minPrice, maxPrice]);

  useEffect(() => {
    getItems();
    getCategories();
  }, []);

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
        <SidebarMenu
          categories={categories}
          setCategoryHandler={setCategoryHandler}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <TopbarMenu/> */}
          <div className="items-main">
            {filteredSortedItems.length
              ? filteredSortedItems.map((item) => (
                  <Item key={item.id} data={item} />
                ))
              : items.map((item) => <Item key={item.id} data={item} />)}
          </div>
        </div>
      </div>
    </>
  );
})

export default Items;
