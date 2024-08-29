import React, { useEffect } from "react";
import '../../App.css'
import HeroService from "../HeroService";
import ServiceCards from "../ServiceCards";
import { useColor } from "../ColorContext";


export default function Services(){
  const { setColor } = useColor();

  useEffect(() => {
    window.scrollTo(0, 0)
    setColor('#AD5D4E', 'services');
    return () => setColor('#FFF8EB', 'home');
  }, []);


  return (
    <>
      <HeroService />
      <ServiceCards />
    </>
    
  )
}