import React from 'react'
import './SecondButton.css'

const SecondButton = ({text , onClick , active}) => {
  return (
    <div className='second-button'>
      <button className={"btn"} onClick={onClick} >{text}</button>
    </div>
  )
}

export default SecondButton
