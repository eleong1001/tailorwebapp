import React, { useEffect } from "react";
import '../../App.css'
import HeroService from "../HeroService";
import ServiceCards from "../ServiceCards";


export default function Services(){

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroService />
      <ServiceCards />
    </>
    
  )
}