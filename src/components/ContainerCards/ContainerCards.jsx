import React, { useRef, useState } from 'react'
import './ContainerCards.css'

function ContainerCards({children}) {
 const trackRef = useRef(null);
 const[currentIndex , setCurrentIndex] = useState(0)
 const cards = React.Children.toArray(children)
 const handleNext = () => {
  console.log("next")
  const nextIndex = currentIndex === cards.length-1 ? 0 : currentIndex + 1;
  setCurrentIndex(nextIndex)
  trackRef.current.style.transform = `translateX(-${nextIndex * 100}%)`;

 };
  const handlePrev = () => {
   console.log("left")
  const prevIndex = currentIndex === 0 ? cards.length-1 : currentIndex-1 ;
  setCurrentIndex(prevIndex)
  trackRef.current.style.transform = `translateX(-${prevIndex * 100}%)` ;
 };
  return (
    <div className='container-cards'>
        <div className="arrow">
        <button className='left' onClick={handlePrev}><i className=" fa-solid fa-circle-arrow-left"></i></button>
        <button className='right' onClick={handleNext}><i className=" fa-solid fa-circle-arrow-right"></i></button>
       </div>
       <div className="cards-view">
         <div className="track-card" ref={trackRef}>
        {cards}
         
      </div>
       </div>
    </div>
  )
}

export default ContainerCards
