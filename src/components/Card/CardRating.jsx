import React from 'react'

const CardRating = ({people , rate}) => {
  return (
    <div className='card-rate' >
        <div className="image-people">
        {people.map((person , index) => 
        <img key={index} src={person} alt=''   />
        )}
        </div>
        <i className="fa-solid fa-star"></i>
        <div className="text"><p>{rate}</p></div>
    
    </div>
  )
}

export default CardRating
