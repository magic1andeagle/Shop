import { useMemo } from "react";

export const useSortedItems = (values, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...values].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return values;
  }, [sort, values]);

  return sortedPosts;
};

export const useItems = (value, sort, query) => {
  const sortedPosts = useSortedItems(value, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((value) =>
      value.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
