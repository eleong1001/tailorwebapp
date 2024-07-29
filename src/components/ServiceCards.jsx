import React from 'react'
import './ServiceCards.css'


function ServiceCards() {
  return (
    <>
      <div className='service-card-container red'>
        <div className="service-card-columns">
          Photo Placeholder
        </div>
        <div className="service-card-columns">
          <div className="text-column">
            <h1>Alterations for Tops</h1>
            
          </div>
        </div>
      </div>
      <div className="service-card-container white">
        <div className="service-card-columns">
          <div className="text-column">
            <h1>
              Alterations for Bottoms
            </h1>
          </div>
        </div>
        <div className="service-card-columns">
          Photo Placeholder
        </div>
      </div>

    </>
    
  )
}

export default ServiceCards