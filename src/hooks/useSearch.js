import { useMemo } from "react";
import ItemState from "../States/ItemState";

const { categoryItems } = ItemState;

export const useSearch = (searchQuery, items, setState) => {
  const searchedItems = useMemo(() => {
    setTimeout(
      () =>
        categoryItems.length
          ? setState(
              [...categoryItems].filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            )
          : setState(
              [...items].filter((item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
            ),
      0
    );
  }, [searchQuery]);

  return searchedItems;
};
