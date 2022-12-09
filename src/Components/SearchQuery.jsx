import React, { useState } from "react";
import magnifier from "../assets/magnifier.svg";

import "../styles/components/SearchQuery.css";
import { useSearch } from "../hooks/useSearch";
import { useSelector } from "react-redux";

const SearchQuery = () => {
  const [value, setValue] = useState("");

  useSearch(value);

  const onMagnifierClick = () => {
    // ДОБАВИТЬ МОДАЛКУ ДЛЯ НАЙДЕННЫХ ТОВАРОВ
    setValue("");
  };

  return (
    <div className="search-query">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-query-input"
        placeholder="Search for anything"
      ></input>
      <img
        onClick={() => onMagnifierClick()}
        className="search-query-magnifier"
        src={magnifier}
      ></img>
    </div>
  );
};

export default SearchQuery;
