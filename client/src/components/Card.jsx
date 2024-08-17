import React from 'react'
import Carditem from './Carditem'
import './Card.css'

function Card() {
  return (
    <>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Carditem 
              src="images/sewingmachine.png"
              text="Discover our modern alteration services and inexpensive pricing."
              label="Services"
              path='/services'
              />
              <Carditem 
              src="images/jorts.png"
              text="Explore our completed and upcoming projects."
              label="Projects"
              path='/services'
              className='rightcard'
              />
            </ul>
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export default Card