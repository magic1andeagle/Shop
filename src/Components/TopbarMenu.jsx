import React from "react";
import SearchQuery from "./SearchQuery";
import { Assets } from "./utils/assets";

import "../styles/components/Topbarmenu.css";

const TopbarMenu = ({ items, setState }) => {
  const { rowType, columnType } = Assets;

  return (
    <div className="topBarMenuContainer">
      <SearchQuery items={items} setState={setState} />
      <div className={`displayTypeMenu`}>
        <div className={`displayOption`}>
          <img src={columnType} />
        </div>
        <div className={`displayOption`}>
          <img src={rowType} />
        </div>
      </div>
    </div>
  );
};

export default TopbarMenu;
