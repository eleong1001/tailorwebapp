import React, { useEffect } from "react";
import '../../App.css'
import AboutSection from "../AboutSection";


export default function About(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AboutSection/>
    </>
    
  );
}