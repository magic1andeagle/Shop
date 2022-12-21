import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/About.css";
import { Assets } from "../utils/assets";

const About = () => {
  const navigate = useNavigate();
  const { earth, graphLineUp, email } = Assets;

  return (
    <div className="about">
      <div className="about-container">
        <p
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Back to shop
        </p>
        <h1 style={{ fontSize: 36 }}>О магазине</h1>
        <div className="about-main">
          <div className="about-buttons-wrapper">
            <button className="about-button">
              <img src={earth}></img>
              <p>О нас</p>
            </button>
            <button className="about-button">
              <img src={graphLineUp}></img>
              <p>Карьера</p>
            </button>
            <button className="about-button">
              <img src={email}></img>
              <p>Сотрудничество</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
