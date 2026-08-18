import React from 'react'
import './Card.css'
import CardImage from './CardImage'
import CardRating from './CardRating'
import Button from '../Button/Button'
import TitleCard from './TitleCard'

const Card = ({image1 , image2 , price ,people , rate , title , description ,textBtn}) => {
  return (
    <div className='card'>
       <CardImage image1={image1} image2={image2} price={price}/>
        <div className="card-body">
        <CardRating people={people} rate={rate} />
        <TitleCard title={title} description={description} />
        </div>
          <Button textBtn={textBtn} />
        
    </div>
  )
}

export default Card
