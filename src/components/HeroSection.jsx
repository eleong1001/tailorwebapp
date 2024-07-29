import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-column left-column hidden">
        <h1>Perfect Your Fits</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Set Appointment
          </Button>
        </div>
      </div>
      <div className="hero-column right-column">
        <div className="hero-window">
          
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;
