import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div className='footer-container'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Leong's Tailor Est. 2024
            </Link>
          </div>
          <div className='social-icons'>
          <a
              className="individual-icons"
              href='https://www.instagram.com/elliot.leong'
              target='_blank'
              rel="noopener noreferrer"
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              className="individual-icons"
              href="mailto:eleong1313@gmail.com"
              // change this to a contact page or something
              rel="noopener noreferrer"
            >
              <i className='fa fa-envelope' />
            </a>
            <a
              className="individual-icons"
              href='https://www.linkedin.com/in/elliot-leong-24baa7289'
              target='_blank'
              rel="noopener noreferrer"
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
    </div>
  );
}

export default Footer;