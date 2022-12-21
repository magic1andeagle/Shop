import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import Item from "../Components/Item";
import SidebarMenu from "../Components/SidebarMenu";
import TopbarMenu from "../Components/TopbarMenu";

import "../styles/pages/MyItem.css";
import { Assets } from "../utils/assets";
import Loader from "../Components/Loader";
import { itemsAPI } from "../services/ItemService";
import { useDispatch, useSelector } from "react-redux";
import { itemsSlice } from "../store/reducers/itemsReducer";

const Items = observer(() => {
  const dispatch = useDispatch();
  const { data: itemsData, error, isLoading } = itemsAPI.useFetchItemsQuery();
  const { initialItems } = useSelector((state) => state.items);
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
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="items-wrapper"
      >
        <SidebarMenu />
        <div className="items-container">
          <TopbarMenu />
          <div className="items-main">
            {isLoading && <Loader />}
            {initialItems?.length ? (
              initialItems.map((item) => <Item key={item.id} data={item} />)
            ) : (
              <div
                style={{ width: "100%", textAlign: "center", marginBottom: 15 }}
              >
                <h1>По вашему запросу ничего не найдено</h1>
              </div>
            )}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {itemsData?.length ? (
                <img src={paginationButton} alt="paginationButton" />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Items;
