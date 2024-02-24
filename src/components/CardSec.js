import React from 'react'
import Card from './Card'
import './CardSec.css'
const CardSec = ({planetName}) => {
  return (
    <div className='CardSec'>
      <Card planetName={planetName} /> 
    </div>
  )
}

export default CardSec