import React from "react";
import Slider from "./Slider";

const SliderWrapper = () => {
  return (
    <div>
      <div style={{ marginBottom: "15px" }} className="price_menu">
        <p style={{ marginBottom: "15px" }}>Цена</p>
        <Slider min={0} max={1000} type={`price`} />
      </div>
      <div style={{ marginBottom: "15px" }} className="rating_menu">
        <p style={{ marginBottom: "15px" }}>Рейтинг товара</p>
        <Slider min={1} max={5} type={`rating`} />
      </div>
    </div>
  );
};

export default SliderWrapper;
