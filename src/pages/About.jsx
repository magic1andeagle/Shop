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
          className="backToShop"
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Back to shop
        </p>
        <h1 style={{ fontSize: 36 }}>About us</h1>
        <div className="about-main">
          <div className="about-buttons-wrapper">
            <button className="about-button">
              <img src={earth} alt=""></img>
              <p>About the shop</p>
            </button>
            <button className="about-button">
              <img src={graphLineUp} alt=""></img>
              <p>Work with us</p>
            </button>
            <button className="about-button">
              <img src={email} alt=""></img>
              <p>For commercial offers</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
