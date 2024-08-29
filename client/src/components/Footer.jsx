import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useColor } from './ColorContext';

function Footer() {

  const { colorState } = useColor();
  const { backgroundColor, currentPage } = colorState;

  const footerStyle = {
    backgroundColor: currentPage === 'services' ? '#AD5D4E' : '#FFF8EB',
    color: currentPage === 'services' ? '#F6E8D5' : '#000000',
  };


  return (
    
    <div style={footerStyle}>
      <div className='footer-container' style={{backgroundColor: footerStyle.backgroundColor}}>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo' style={{color: footerStyle.color}}>
              re:tel est. 2024
            </Link>
          </div>
          <div className='social-icons' style={{color: footerStyle.color}}>
          <a
              className="individual-icons"
              style={{color: footerStyle.color}}
              href='https://www.instagram.com/elliot.leong'
              target='_blank'
              rel="noopener noreferrer"
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className="individual-icons"
              style={{color: footerStyle.color}}
              href="mailto:eleong1313@gmail.com"
              // change this to a contact page or something
              rel="noopener noreferrer"
            >
              <i className='fa fa-envelope' />
            </a>
            <a
              className="individual-icons"
              style={{color: footerStyle.color}}
              href='https://www.linkedin.com/in/elliot-leong-24baa7289'
              target='_blank'
              rel="noopener noreferrer"
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;