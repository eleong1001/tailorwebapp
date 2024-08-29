import React from 'react'
import './CustomSection.css'
import { Button } from "./Button";

function CustomSection() {
  return (
    <div className='custom-container'>
      <div className="custom-header hidden">
        Want a Custom Job?
      </div>
      <div className="custom-paragraph">
        Aside from general alterations, we love upcycling second-hand clothes. 
        We can custom flare or increase the leg opening of pants to create 
        a looser, more modern silhouette. We can also adjust the sleeve length
        of your favorite button-up or sewing-on unique brand patches. Any other ideas
        you may have, we are glad to provide our services.

        <div className="custom-btn">
          <Button
              buttonStyle="btn--primary"
              buttonSize="btn--large"
          >
              Request Custom Job
          </Button>
        </div>
      </div>
      <div className='custom-sub'>
        <sub>Photo: <br/> Wide jorts with custom inseam </sub>
      </div>
      
      <div className="custom-img">
        <img src="../images/jorts-custom.png" alt="alt" />
      </div> 
    </div>
    
  )
}

export default CustomSection