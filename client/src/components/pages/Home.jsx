import "../../App.css";
import HeroSection from "../HeroSection";
import Card from '../Card';
import React, { useEffect } from "react";
import Smallcard from "../Smallcard";
import CustomSection from "../CustomSection";

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <Smallcard />
      <CustomSection />
      <Card />
    </>
  );
}

export default Home;
