import React from 'react'
import './Smallcard.css'
import '../App.css'


function Smallcard() {
  return (
    <>
      <div className='smallcard-heading'>
        <hr></hr>
        <div className='heading-text'>Our Services Include</div>
        
        <hr></hr>
      </div>
      <div className='logoCards'>
        <div className="card-container hidden">
          <div className="playingCard ">
            
          </div>

          <div className="card-label">
            Pant Hemming
          </div>
        </div>
        <div className="card-container hidden">
          <div className="playingCard ">
            
          </div>
          <div className="card-label">
            Waist Adjustment
          </div>
        </div>
        <div className="card-container hidden">
          <div className="playingCard ">
            
          </div>
          <div className="card-label">
            Shirt Cropping
          </div>
        </div>
        <div className="card-container hidden">
          <div className="playingCard ">
            
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