import React, { Children } from "react";
import "../styles/pages/MyItem.css";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom/umd/react-router-dom.development";

const MyItem = ({ value, remove }) => {
  const router = useNavigate();

  return (
    <div className="item">
      <div className="photo"></div>
      <h4 style={{ textAlign: "center" }} className="itemName">
        {value.name}
      </h4>
      <h5 style={{ textAlign: "center" }} className="itemPrice">
        {value.price}
      </h5>
      <div className="post__btns">
        <MyButton
          className="button"
          text="Удалить товар"
          onClick={() => remove(value)}
        />
        <MyButton
          className="button"
          text="Открыть товар"
          onClick={() => router("/items/" + value.id)}
        />
      </div>
    </div>
  );
};

export default MyItem;
