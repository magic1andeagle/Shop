import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/About.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
      <div className="about-container">
        <p
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Back to shop
        </p>
        <h1>О магазине</h1>
        <div className="about-buttons-wrapper">
          <button className="about-button">О нас</button>
          <button className="about-button">Карьера</button>
          <button className="about-button">Сотрудничество</button>
        </div>
      </div>
    </div>
  );
};

export default About;
