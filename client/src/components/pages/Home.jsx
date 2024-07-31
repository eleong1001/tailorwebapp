import "../../App.css";
import HeroSection from "../HeroSection";
import Card from '../Card';
import React, { useEffect } from "react";
import Smallcard from "../Smallcard";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <Smallcard />
      <Card />
    </>
  );
}

export default Home;
