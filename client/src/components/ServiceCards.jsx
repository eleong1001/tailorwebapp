import React from 'react'
import './ServiceCards.css'


function ServiceCards() {
  return (
    <>
      <div className='service-card-container'>
        <div className="service-card-columns">
          <div className="text-column">
            <h1>Tops</h1>
            <ul>
              <li>
                <span>- T-Shirt Crop</span>
                <span>$15</span>
              </li>
              <li>
                <span>- Button Up Crop</span>
                <span>$20</span>
              </li>
              <li>
                <span>- Dress Shirt Slimming</span>
                <span>$25</span>
              </li>
              <li>
                <span>- Dress Shirt Darts</span>
                <span>$10</span>
              </li>
              <li>
                <span>- Adjust Dress Shirt Sleeves</span>
                <span>$15</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="service-card-columns">
          <div className="text-column">
            <h1>
              Bottoms
            </h1>
            <ul>
            <li>
            <span>- Pant Hem</span>
            <span>$15</span>
          </li>
          <li>
            <span>- Original Hem</span>
            <span>$20</span>
          </li>
          <li>
            <span>- Pant Waist Reduction</span>
            <span>$30</span>
          </li>
          <li>
            <span>- Flare Pants</span>
            <span>$40</span>
          </li>
          <li>
            <span>- "Baggify" Jeans <br></br> &nbsp;&nbsp;(Added inseam panel)</span>
            <span>$50</span>
          </li>
            </ul>
          </div>
        </div>
        <div className="service-custom">
          <h1>
            Custom
          </h1>
          If you have any unique ideas or specific requirements that need tailoring, please don’t hesitate to request our services! We're here to help bring your vision to life.
        </div>
      </div>
    </>
    
  )
}

export default ServiceCards