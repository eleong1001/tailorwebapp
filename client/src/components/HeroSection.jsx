import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-column left-column hidden">
        <div className="staircase">
          <h1 className="step">Reinvent</h1>
          <h1 className="step">Revamp</h1>
          <h1 className="step">Retell</h1>
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
      <div className="hero-column right-column">
        <div className="hero-window">
          
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;
