import React from 'react'
import "./AboutSection.css"


function AboutSection() {
  return (
    <div className='about-container'>
      <div className="about-header">
        About Us
      </div>
      <div className="about-text">
        The re:tel website was created partially for an alterations business that primarly serves college students with quick and inexpensive services.
        <br />
        <br />
        The other half, serves the purpose of a long-term computer science project. The website was created from scratch using a wide variety of youtube videos and programming framework documentation.
        <br />
        <br />
        This website used Vite & React to contruct the frontend aspects of the user interface. For behind the scenes objectives, the backend servers are run via Node JS and Express, which connect and send data to a MongoDB database.
        <br />
        <br />
        To contact me, view the icons in the footer to connect on Instagram, Gmail, or Linkedin.
      </div>
      <div className="about-img-container">
        <img src="../images/about-card-img.jpg" alt="about photo" />
      </div>
    </div>
  )
}

export default AboutSection