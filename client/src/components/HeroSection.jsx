import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="left-column ">
        <div className="staircase">
          <h1 className="step hidden">Reinvent</h1>
          <h1 className="step hidden">Revamp</h1>
          <h1 className="step hidden">re:tel</h1>
        </div>
        <p>Eco-Driven Tailoring Services </p>
        <div className="hero-btns">
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Set Appointment
          </Button>
        </div>
        <sub>Based in Minneapolis & St. Louis</sub>
      </div>
      <div className="right-column">
        <div className="hero-window">
          <img src='../images/RedwoodHeroPhoto.png' alt='Hero picture' />
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;
