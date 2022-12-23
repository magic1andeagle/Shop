import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import Item from "../Components/Item";
import SidebarMenu from "../Components/SidebarMenu";
import TopbarMenu from "../Components/TopbarMenu";

import "../styles/pages/MyItem.css";
import { Assets } from "../utils/assets";
import Loader from "../Components/UI/Loader";
import { itemsAPI } from "../services/ItemService";
import { useDispatch, useSelector } from "react-redux";
import { itemsSlice } from "../store/reducers/itemsReducer";

const Items = observer(() => {
  const dispatch = useDispatch();
  const { data: itemsData, isLoading } = itemsAPI.useFetchItemsQuery();
  const { filteredItems } = useSelector((state) => state.items);
  const { setInitialItems } = itemsSlice.actions;
  const { paginationButton } = Assets;

  useEffect(() => {
    dispatch(
      setInitialItems(
        itemsData?.map((item) => (item = { ...item, quantity: 1 }))
      )
    );
  }, [itemsData]);

  return (
    <>
      <div className="items-wrapper">
        <SidebarMenu />
        <div className="items-container">
          <TopbarMenu />
          <div className="items-main">
            {isLoading && <Loader />}
            {!isLoading && !filteredItems?.length && (
              <div className="items-main-nothing">
                <h1>По вашему запросу ничего не найдено</h1>
              </div>
            )}
            {filteredItems?.length &&
              filteredItems.map((item) => <Item key={item.id} data={item} />)}
            <div className="paginationButton">
              {!isLoading && itemsData?.length && (
                <img src={paginationButton} alt="paginationButton" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Items;
