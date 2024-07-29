import React, {useEffect} from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Services from "./components/pages/Services.jsx";
import Projects from "./components/pages/Projects.jsx";
import SignUp from "./components/pages/SignUp.jsx";
import About from "./components/pages/About.jsx";
import Footer from "./components/Footer.jsx"
import ObserverElement from './components/ObserverElement.jsx';


function App() {
  return (
    <>
      <Router>
        <ObserverElement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Services/>} />
          {/* <Route path='/projects' element={<Projects/>} /> */}
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
