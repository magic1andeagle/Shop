import React from "react";
import SearchQuery from "./SearchQuery";
import { Assets } from "../utils/assets";

import "../styles/components/Topbarmenu.css";
import ItemState from "../States/ItemState";
import { useDispatch } from "react-redux";
import { addedItemsSlice } from "../store/reducers/addedItemsReducer";
import { itemsSlice } from "../store/reducers/itemsReducer";

const TopbarMenu = ({ items, setState }) => {
  const dispatch = useDispatch();
  const { setCardType } = itemsSlice.actions;
  const { rowType, columnType } = Assets;
  const { setDisplayType } = ItemState;

  return (
    <div className="topBarMenuContainer">
      <SearchQuery items={items} setState={setState} />
      <div className={`displayTypeMenu`}>
        <div
          onClick={() => dispatch(setCardType("horizBlock"))}
          className={`displayOption`}
        >
          <img src={columnType} />
        </div>
        <div
          onClick={() => dispatch(setCardType("card"))}
          className={`displayOption`}
        >
          <img src={rowType} />
        </div>
      </div>
    </div>
  );
};

export default TopbarMenu;
