import React from "react";
import SearchQuery from "./SearchQuery";
import { Assets } from "../utils/assets";

import "../styles/components/Topbarmenu.css";
import ItemState from "../States/ItemState";

const TopbarMenu = ({ items, setState }) => {
  const { rowType, columnType } = Assets;
  const { displayType, setDisplayType } = ItemState

  console.log(items)

  return (
    <div className="topBarMenuContainer">
      <SearchQuery items={items} setState={setState} />
      <div className={`displayTypeMenu`}>
        <div onClick={() => setDisplayType('horizBlock')} className={`displayOption`}>
          <img src={columnType} />
        </div>
        <div onClick={() => setDisplayType('card')} className={`displayOption`}>
          <img src={rowType} />
        </div>
      </div>
    </div>
  );
};

export default TopbarMenu;
