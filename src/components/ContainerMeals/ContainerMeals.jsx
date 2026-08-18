import React, { useState } from 'react'
import './ContainerMeals.css'
import MealCard from '../MealCard/MealCard'

const ContainerMeals = ({children}) => {
  const [currentSlide , setCurrentSlide] = useState(0)
  const cards = React.Children.toArray(children)
  const desktopSlides =[];
  for(let i=0 ; i < cards.length ; i+=8) {
    desktopSlides.push(cards.slice(i , i+8))
  }
  const mobileSlides = cards;
  const nextSlide = () => {
    setCurrentSlide((prev) => {

      if (window.innerWidth <= 992) {
         if (prev >=  mobileSlides.length-1) {
        return 0;
      }
      return prev + 1;
      }

      if(prev >= desktopSlides.length -1) {
        return 0;
      }
      return prev + 1 ;
      
    })
  }
  const prevSlide = () => {
    setCurrentSlide((prev) => {
       if(window.innerWidth <= 992) {
         if(prev <=0) {
          return mobileSlides.length-1
         }
         return prev - 1
       }
       if(prev <= 0) {
        return desktopSlides.length - 1
       }
       return prev -1
    })
  }
  return (
    <div className='container-meals'>
      {/* desktop*/}
      <div className="desktop-slider">
        <button className='slider-btn' onClick={prevSlide}>prev</button>
        <div className="slider-window">
          <div className="slider-track" style={{transform:`translateX(-${currentSlide * 100}%)`}}>
            {desktopSlides.map((slide , index) => (
              <div className="desktop-slide" key={index}>{slide.map((card ,cardIndex ) => (
                <div className="slide-card" key={cardIndex}>{card}</div>
              ))}</div>
            ))}
            
          </div>
        </div>
        <button className='slider-btn' onClick={nextSlide}>next</button>
      </div>

      {/*mobile slider */}
      <div className="mobile-slider">
         <div className="container-btn">
          <button className='slider-btn prev' onClick={prevSlide}>prev</button>
         <button className='slider-btn next' onClick={nextSlide}>next</button>
         </div>
        <div className="slider-window">
          <div className="slider-track" style={{transform:`translateX(-${currentSlide * 100}%)`}}>
            {mobileSlides.map((card , index) => (
              <div className="mobile-slide" key={index}>{card}</div>
            ))}
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ContainerMeals
