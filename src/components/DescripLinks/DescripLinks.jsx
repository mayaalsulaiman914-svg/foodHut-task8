import React from 'react'
import './DescripLinks.css'
const DescripLinks = ({image , desc , smalltext}) => {
  return (
    <div className='container-desc'>
      <img src={image} alt='' />
       <div className="text">
        <small>{smalltext}</small>
         <p>{desc}</p>
       </div>
    </div>
  )
}

export default DescripLinks
