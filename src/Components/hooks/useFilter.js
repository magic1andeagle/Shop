import { useMemo } from "react";
import { useSort } from "./useSort";

export const useFilter = (items, categories) => {
  const filteredItems = useMemo(() => {
    return [...items].filter((item) => {
      if (categories.some((category) => item.category == category.value)) {
        return item;
      }
    });
  }, [items, categories]);
  return filteredItems;
};
