import React from "react";
import ItemService from "../API/ItemService";

const getItems = async () => {
  const response = await ItemService.getItems();
  return response;
};

const getCategories = async () => {
  const response = await ItemService.getCategories()
  return response
}

export const itemsContext = React.createContext(getItems());
export const categoriesContext = React.createContext(getCategories());
