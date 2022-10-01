import { useMemo } from "react";

export const useSearch = (searchQuery, items, setState) => {
  const searchedItems = useMemo(() => {
    setTimeout(
      () =>
        setState(
          [...items].filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        ),
      0
    );
  }, [searchQuery]);

  return searchedItems;
};
