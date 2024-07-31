import React, { useEffect } from "react";
import '../../App.css'


export default function About(){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <h1 className='about'>ABOUT</h1>
}