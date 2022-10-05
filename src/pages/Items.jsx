import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { useCategory } from "../Components/hooks/useCategory";
import Item from "../Components/Item";
import SidebarMenu from "../Components/SidebarMenu";
import SliderState from "../Components/States/SliderState";
import TopbarMenu from "../Components/TopbarMenu";
import { categoriesContext, itemsContext } from "../context/context";
import ItemState from "../Components/States/ItemState";

import "../styles/pages/MyItem.css";

const Items = observer(() => {
  const [items, setItems] = useState([]);
  const [catItems, setCatItems] = useState([])
  const [priceRateRangedItems, setPriceRateRangedItems] = useState([])
  const [searchedItems, setSearchedItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const { minPrice, maxPrice, minRating, maxRating } = SliderState;
  const { updateItems, initItems, setCategoryItems, categoryItems } = ItemState;

  const fetchCategories = useContext(categoriesContext);
  const fetchItems = useContext(itemsContext);
  const getCategoryItems = useCategory(items, selectedCategory);

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

  const onSliderChange = () => {

  }

  const setPriceRange = () => {
    selectedCategory.length
      ? setCatItems(
          categoryItems.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
          )
        )
      : setItems(
          initItems.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
          )
        );
  };

  const setRatingRange = () => {
    selectedCategory.length
      ? setCategoryItems(
          categoryItems.filter(
            (item) =>
              item.rating.rate >= minRating && item.rating.rate <= maxRating
          )
        )
      : setItems(
          initItems.filter(
            (item) =>
              item.rating.rate >= minRating && item.rating.rate <= maxRating
          )
        );
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
    setPriceRange();
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setRatingRange();
  }, [minRating, maxRating]);

  useEffect(() => {
    getItems();
    getCategories();
  }, []);

  useEffect(() => {
      setCategoryItems(getCategoryItems)
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
        />
        <div className="items-container" style={{}}>
          <TopbarMenu
            setState={
              selectedCategory.length ? setCatItems : setItems
            }
            items={
              selectedCategory.length || minPrice !== 0 || maxPrice !== 1000
                ? filteredItems
                : initItems
            }
          />
          <div className="items-main">
            {selectedCategory.length
              ? catItems.map((item) => (
                  <Item key={item.id} data={item} />
                ))
              : items.map((item) => <Item key={item.id} data={item} />)}
          </div>
        </div>
      </div>
    </>
  );
});

export default Items;
