import { useMemo } from "react";

export const useCategory = (items, categories) => {
  const categoryItems = useMemo(() => {
    return [...items].filter((item) => {
      if (categories.some((category) => item.category == category.value)) {
        return item;
      }
    });
  }, [items, categories]);
  return categoryItems;
};
