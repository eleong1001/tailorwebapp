import React, { useEffect } from "react";
import "../../App.css";
import AppForm from "../AppForm";
import Construction from "../Construction";

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Construction />
      {/* <AppForm /> */}
    </>
  );
}
