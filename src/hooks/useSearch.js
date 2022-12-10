import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAPI } from "../services/ItemService";
import { itemsSlice } from "../store/reducers/itemsReducer";

export const useSearch = (searchQuery) => {
  const { data: items } = itemsAPI.useFetchItemsQuery();
  const { categoryItems } = useSelector((state) => state.items);
  const { setFilteredItems } = itemsSlice.actions;
  const dispatch = useDispatch();

  const getSearchedItems = useMemo(() => {
    setTimeout(() => {
      if (categoryItems?.length) {
        dispatch(
          setFilteredItems(
            categoryItems?.filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          )
        );
      } else {
        dispatch(
          setFilteredItems(
            items?.filter((item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
          )
        );
      }
    }, 0);
  }, [searchQuery]);

  return getSearchedItems;
};
