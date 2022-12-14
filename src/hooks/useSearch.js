import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAPI } from "../services/ItemService";
import { itemsSlice } from "../store/reducers/itemsReducer";

export const useSearch = (searchQuery) => {
  const { data: items } = itemsAPI.useFetchItemsQuery();
  const { categoryItems, areFiltersSet, filteredItems } = useSelector(
    (state) => state.items
  );
  const { setSearchedItems, setFilteredItems } = itemsSlice.actions;
  const dispatch = useDispatch();

  const getSearchedItems = useMemo(() => {
    setTimeout(() => {
      if (!searchQuery.length) {
        dispatch(setSearchedItems([]));
        if (!areFiltersSet && !categoryItems.length) {
          dispatch(setFilteredItems(items));
        }
        return;
      }
      if (areFiltersSet) {
        const data = filteredItems?.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        dispatch(setSearchedItems(data));
        dispatch(setFilteredItems(data));
        return;
      }
      if (categoryItems?.length) {
        const data = categoryItems?.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        dispatch(setSearchedItems(data));
        dispatch(setFilteredItems(data));
      } else {
        const data = items?.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        dispatch(setSearchedItems(data));
        dispatch(setFilteredItems(data));
      }
    }, 0);
  }, [searchQuery]);

  return getSearchedItems;
};
