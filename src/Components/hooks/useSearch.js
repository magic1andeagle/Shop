import { useMemo } from "react";

export const useSearch = (searchQuery, items) => {
  const searchedItems = useMemo(() => {
    console.log([...items].filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery]);

  return searchedItems;
};
