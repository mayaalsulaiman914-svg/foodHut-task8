import React, { useEffect, useState } from 'react'
import ContainerMeals from '../ContainerMeals/ContainerMeals';
import MealCard from '../MealCard/MealCard.jsx';
 
const Menu = ({selectedCategory}) => {
 const [meals , setMeals] = useState([])
 
 const filterMeals = selectedCategory === null ? meals : meals.filter((meal) => meal.category === selectedCategory)  
 useEffect(() => {
    fetch("/data/menu.json")
     .then((resopnse) => resopnse.json())
     .then ((data) => setMeals(data))
 } ,[]) ;
  return (
    <div className='menu'>
      <ContainerMeals>
        {filterMeals.map((meal) => (
             <MealCard
             key ={meal.id}
             meal = {meal}
            /> 
        ))}
      </ContainerMeals>
    </div>
  )
}

export default Menu
