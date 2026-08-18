import React from 'react'
import './Button.css'

function Button({textBtn}) {
  return (
    <div className='btn'>
      <button>{textBtn}</button>
    </div>
  )
}

export default Button
 