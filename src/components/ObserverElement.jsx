import React, {useEffect} from 'react'
import "../App.css";
import { useLocation } from 'react-router-dom'

const ObserverElement = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((ele) => observer.observe(ele));

    return () => {
      hiddenElements.forEach((ele) => observer.unobserve(ele));
    };

  }, [location.pathname]);

  return null;
}

export default ObserverElement
