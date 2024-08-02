import React, { useEffect} from "react";
import '../../App.css'
import AppForm from "../AppForm"

export default function SignUp(){

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <AppForm />
    </>
    
  )
}