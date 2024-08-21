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
            <ul>
              <li>
                T-Shirt Crop - $20
              </li>
              <li>
                Button up Crop - $25
              </li>
              <li>
                Dress Shirt Sliming - $25
              </li>
              <li>
                Dress Shirt Darts - $10
              </li>
              <li>
                Adjust Dress Shirt Sleeves - $15
              </li>
              <li>
                Adjust T-Shirt Sleeve Length - $10
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="service-card-container white">
        <div className="service-card-columns">
          <div className="text-column">
            <h1>
              Alterations for Bottoms
            </h1>
            <ul>
              <li>
                Pant Hem - $15
              </li>
              <li>
                Original Hem - $20
              </li>
              <li>
                Pant Waist Reduction - $30
              </li>
              <li>
                Flare Pants - $40
              </li>
              <li>
                "Baggify" Jeans (Added panel on inseam of Jeans) - $50
              </li>
            </ul>
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