import React from "react";
import ItemService from "../Components/API/ItemService";

export const items = [
  {
    id: 1,
    title: "Велосипед горный",
    price: 15000,
    initialPrice: 15000,
    quantity: 0,
    category: "Велосипеды",
  },
  {
    id: 2,
    title: "Электросамокат",
    price: 25000,
    initialPrice: 25000,
    quantity: 0,
    category: "Самокаты",
  },
  {
    id: 3,
    title: "Самокат детский",
    price: 8000,
    initialPrice: 8000,
    quantity: 0,
    category: "Самокаты",
  },
  {
    id: 4,
    title: "Шведская стенка",
    price: 8000,
    initialPrice: 8000,
    quantity: 0,
    category: "Спорт товары",
  },
  {
    id: 5,
    title: "Футбольный мяч",
    price: 8000,
    initialPrice: 8000,
    quantity: 0,
    category: "Спорт товары",
  },
  {
    id: 6,
    title: "Ролики детские",
    price: 8000,
    initialPrice: 8000,
    quantity: 0,
    category: "Коньки и ролики",
  },
];

export const categories = [
  "Велосипеды",
  "Самокаты",
  "Спорт товары",
  "Коньки и ролики",
];

export const sportItemsContext = React.createContext(items);

export const getItems = async () => {
  const response = await ItemService.getItems();
  return response;
};

export const getCategories = async () => {
  const response = await ItemService.getCategories()
  return response
}

export const newItemsContext = React.createContext(getItems());
export const categoriesContext = React.createContext(getCategories());
