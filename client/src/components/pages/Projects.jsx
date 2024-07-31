import React, { useEffect } from "react";
import '../../App.css'


export default function Projects(){

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <h1 className='projects'>PROJECTS</h1>
}