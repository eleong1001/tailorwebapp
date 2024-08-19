import React from 'react'
import { Link } from 'react-router-dom'

function Carditem(props) {
  return (
    <li className="cards__item hidden">
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" >
          <img src={props.src} alt="Travel Image" className={`cards__item__img ${props.className}`}/>
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </li>
  )
}

export default Carditem