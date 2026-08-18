import React from 'react'
import './MealCard.css'
import MealCardImage from './MealCardImage'
import MealCardRating from './MealCardRating'
import MealCardTitle from './MealCardTitle'
import Button from '../Button/Button'

const MealCard = ({meal}) => {
  return (
    <div className='Meal-card'>
       <MealCardImage image1={meal.image1} image2={meal.image2} price={meal.price}/>
        <div className="card-body">
        <MealCardRating people={meal.people} rate={meal.rate} />
        <MealCardTitle title={meal.title} description={meal.description} />
        </div>
        <Button textBtn="Order Now" />
        
    </div>
  )
}

export default MealCard

