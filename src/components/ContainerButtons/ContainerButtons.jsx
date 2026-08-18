import React from 'react'
import './ConatainerButtons.css'

const ContainerButtons = ({children}) => {
  return (
    <div className='container-btn'>
      {children}
    </div>
  )
}

export default ContainerButtons

