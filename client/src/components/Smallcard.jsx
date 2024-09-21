import React from 'react'
import './Smallcard.css'
import '../App.css'


function Smallcard() {
  return (
    <>
      <div className='smallcard-heading'>
        <div className='heading-text'>Our Services Include</div>
        
      </div>
      <div className='logoCards'>
        <div className="card-container hidden">
          <div className="playingCard first-img">
          <img src="../images/waist-jean-clear.svg" alt="pant waist photo"/>
          </div>

          <div className="card-label">
            Pant Hemming
          </div>
        </div>
        <div className="card-container hidden">
          <div className="playingCard second-img">
            <img src="../images/waist-clear.png" alt="pant waist photo"/>
          </div>
          <div className="card-label">
            Waist Adjustment
          </div>
        </div>
        <div className="card-container hidden">
          <div className="playingCard third-img ">
            <img src="../images/shirt-crop.jpg" alt="shirt" />
          </div>
          <div className="card-label">
            Shirt Cropping
          </div>
        </div>
        <div className="card-container hidden">
          <div className="playingCard fourth-img">
            <img src="../images/dress-shirt.jpg" alt="shirt" />
          </div>
          <div className="card-label">
            Dress Shirt Tailoring
          </div>
        </div>
        
      </div>
      <div className="spacer"></div>
    </>
    
  )
}

export default Smallcard