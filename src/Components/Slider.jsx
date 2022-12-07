import React, { useState, useRef, useCallback, useEffect } from "react";
import "../styles/components/Slider.css";
import SliderState from "../States/SliderState";

const Slider = ({ min, max, type }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minValueRef = useRef(min);
  const maxValueRef = useRef(max);
  const range = useRef(null);

  const { updatePrice, updateRating } = SliderState;

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
  }, [minValue, getPercent, maxValue]);

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
  }, [maxValue, getPercent, minValue]);

  useEffect(() => {
    type === "price"
      ? updatePrice(minValue, maxValue)
      : updateRating(minValue, maxValue);
  }, [minValue, maxValue]);

  useEffect(() => {
    const input = document.querySelector('.price_input_min')
    input.style.width = (minValueRef.current.length + 1) * 12 + "px"
  }, [minValue])

  useEffect(() => {
    const input = document.querySelector('.price_input_max')
    input.style.width = (maxValueRef.current.length + 1) * 12 + "px"
  }, [maxValue])

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
        <div className={`price_input_container`}>
          <p style={{ fontSize: 14 }}>from:</p>
          <input
            onFocus={(e) => e.target.parentElement.classList.add('price_input_container_active')}
            onBlur={(e) => e.target.parentElement.classList.toggle('price_input_container_active')}
            onKeyDown={(e) => e.target.style.width = e.target.value.length + 'ch'}
            pattern={`${minValue == 0 ? "[0-9]" : "^[1-9]\\d*$"}`}
            maxLength={`4`}
            className="price_input price_input_min"
            placeholder="from:"
            value={minValue}
            onChange={(e) => {
              !e.target.value.length
                ? setMinValue(min)
                : setMinValue(e.target.value);
            }}
          />
          <p>Р.</p>
        </div>
        <div className="price_input_container">
          <p style={{ fontSize: 14 }}>to:</p>
          <input
            onFocus={(e) => e.target.parentElement.classList.add('price_input_container_active')}
            onBlur={(e) => e.target.parentElement.classList.toggle('price_input_container_active')}
            onInput={(e) => e.target.style.width = ((e.target.value.length + 1) * 7) + 'px'}
            pattern="^[1-9]\d*$"
            maxLength={`4`}
            className="price_input price_input_max"
            placeholder="to:"
            value={maxValue}
            onChange={(e) => {
              !e.target.value.length
                ? setMaxValue(max)
                : setMaxValue(e.target.value);
            }}
          />
          <p>Р.</p>
        </div>
      </div>
    </>
  );
};

export default Slider;
