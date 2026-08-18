import React from 'react'
import './Title.css'

const Title = ({title, text}) => {
  return (
    <div className="section-title">
      <h1>{title}</h1>
      <p className='title-text'>{text}</p>
    </div>
  )
}

export default Title
