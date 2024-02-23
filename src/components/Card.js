import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div className='CardBody'>
        <div className='CardHeading'>
           <h1> Tatooine</h1>
        </div>
        <div className='CardContent'>
            <ul typeof='none'>
                <li>Temperature</li>
                <li>Climate : arid</li>
                <li>Population</li>
            </ul>

        </div>
        <div className='CardSec'>
            <a>Residents</a>
        </div>
    </div>
  )
}

export default Card