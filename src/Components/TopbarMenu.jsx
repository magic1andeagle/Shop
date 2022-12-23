import React from "react";
import SearchQuery from "./UI/SearchQuery";
import { Assets } from "../utils/assets";

import "../styles/components/Topbarmenu.css";
import { useDispatch } from "react-redux";
import { itemsSlice } from "../store/reducers/itemsReducer";

const TopbarMenu = ({ items, setState }) => {
  const dispatch = useDispatch();
  const { setCardType } = itemsSlice.actions;
  const { rowType, columnType } = Assets;

  return (
    <div className="topBarMenuContainer">
      <SearchQuery items={items} setState={setState} />
      <div className={`displayTypeMenu`}>
        <div
          onClick={() => dispatch(setCardType("horizBlock"))}
          className={`displayOption`}
        >
          <img src={columnType} alt="" />
        </div>
        <div
          onClick={() => dispatch(setCardType("card"))}
          className={`displayOption`}
        >
          <img src={rowType} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopbarMenu;
