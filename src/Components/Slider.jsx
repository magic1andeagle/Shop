import React, { useState, useRef, useCallback, useEffect } from "react";
import "../styles/components/Slider.css";
import SliderState from "./States/SliderState";

const Slider = ({ min, max, type }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minValueRef = useRef(min);
  const maxValueRef = useRef(max);
  const range = useRef(null);

  const { updatePrice, updateRating } = SliderState

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const priceGap = maxValue - minValue;
    if (priceGap < 0) {
      range.current.style.width = `0%`;
    }
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValueRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, getPercent]);

  useEffect(() => {
    const priceGap = maxValue - minValue;
    if (priceGap < 0) {
      range.current.style.width = `0%`;
    }
    const minPercent = getPercent(minValueRef.current);
    const maxPercent = getPercent(maxValue);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxValue, getPercent]);

  useEffect(() => {
    type == 'price' ? updatePrice(minValue, maxValue) : updateRating(minValue, maxValue)
  }, [minValue, maxValue]);

  return (
    <>
      <div className="slider_container">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxValue);
            setMinValue(value);
            minValueRef.current = value;
          }}
          className="thumb thumb_left"
          style={{ zIndex: minValue > max - 100 && "5" }}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minValue);
            setMaxValue(value);
            maxValueRef.current = value;
          }}
          className="thumb thumb_right"
        />
        <div className="slider">
          <div className="slider_track" />
          <div ref={range} className="slider_range" />
          <div className="slider_left_value">{minValue}</div>
          <div className="slider_right_value">{maxValue}</div>
        </div>
      </div>
      <div className="price_range_inputs">
        <input
          pattern={`${minValue == 0 ? "[0-9]" : "^[1-9]\\d*$"}`}
          maxLength={`4`}
          style={{ marginRight: "5px" }}
          className="price_input"
          placeholder="from:"
          value={minValue}
          onChange={(e) => {
            !e.target.value.length
              ? setMinValue(min)
              : setMinValue(e.target.value);
          }}
        />
        <input
          pattern="^[1-9]\d*$"
          maxLength={`4`}
          className="price_input"
          placeholder="to:"
          value={maxValue}
          onChange={(e) => {
            !e.target.value.length
              ? setMaxValue(max)
              : setMaxValue(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Slider;
