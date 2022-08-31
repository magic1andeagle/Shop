import { useMemo } from "react";

export const useSort = (items, sort) => {
  const sortedItems = useMemo(() => {
    if (sort && sort == 'title') {
      return [...items].sort((a, b) => a[sort].toString().localeCompare(b[sort].toString()));
    }
    if (sort && sort == 'price') {
        return [...items].sort((a, b) => a[sort] - b[sort])
    }
    return items;
  }, [items, sort]);

  return sortedItems;
};
