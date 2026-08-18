import React from 'react'

const MealCardImage = ({image1 , image2 , price}) => {
  return (
    <div className='card-image'>
      <img className='image-1' src={image1} alt="" />
      <img className='image-2' src={image2} alt="" />
      <div className="circle-yellow">{price}</div>
      
    </div>
  )
}

export default MealCardImage
 