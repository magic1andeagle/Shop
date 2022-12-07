import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAPI } from "../services/ItemService";
import ItemState from "../States/ItemState";
import { searchedItemsSlice } from "../store/reducers/searchedItemsReducer";

//categoryItems

export const useSearch = (searchQuery) => {
  const { data: items } = itemsAPI.useFetchItemsQuery();
  const { categoryItems } = useSelector((state) => state.categoryItems);
  const { searchItems } = searchedItemsSlice.actions;
  const dispatch = useDispatch();

  const { searchedItems: searchedItems1 } = useSelector(
    (state) => state.searchedItems
  );

  console.log(searchedItems1);

  const searchedItems = useMemo(() => {
    setTimeout(
      () =>
        categoryItems?.length
          ? dispatch(
              searchItems(
                categoryItems?.filter((item) =>
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
              )
            )
          : dispatch(
              searchItems(
                items?.filter((item) =>
                  item.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
              )
            ),
      0
    );
  }, [searchQuery]);

  return searchedItems;
};
