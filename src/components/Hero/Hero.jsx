import React from 'react'
import './Hero.css'
import Title from '../Title/Title'
import Container from '../Container/Container.jsx'
 

const Hero = ({title , text}) => {
  return (
    <Container>
    <div className='hero'>
       <div className="hero-content">
          <div className="info-hero">
        <div className="trust">
            <img src='/assets/img/trust.png' />
            <p>People Trust us</p>
        </div>
        <div className="hero-text">
            <Title
            title ={title}
            text = {text}
            />
        </div>
        <div className="hero-search">
            <div className="one">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" name="search" id="" className='searchInput' placeholder='Search food' />
            </div>
            <div className="two">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div className="btns">
            <button className='download'>Downlode App</button>
             <div className="video">
            <div className='circle-vid'><i className="fa-solid fa-play"></i></div>
            <p>Watch Video</p>
             </div>
        </div>
      </div> 
 
      <div className="image-hero">
         <div className="half">
            <img src='/assets/img/half-circle.png' />
         </div>
          <div className="girl-hero">
              <img src='/assets/img/img-hero.png' />
          </div>
          <img className='image1' src='/assets/img/image1.png'/>
          <img className='image2' src='/assets/img/image2.png'/>
          <img className='image3' src='/assets/img/image3.png'/>
          <img className='image4' src='/assets/img/image4.png'/>

          <div className="container-rate">
           <div className="rate1">
            <img src='/assets/img/Rectangle.png' />
            <div className="text">
                <p>Italian Pizza</p>
                 <img src='/assets/img/Rating.png' />
                <p><small>$</small>9.50</p>
            </div>
           </div>
           <div className="rate2">
            <img src='/assets/img/ya.png' />
            <div className="text">
                <p>Our Happy Customer </p>
                <div className="star-rate">
                    <img src='/assets/img/Star.svg'/>
                     <small>4.9 <span>(1.999 reviews)</span></small>
                </div>
            </div>
           </div>

          </div>
          <img className='seek' src='/assets/img/SeekPng.png' />
          <img className='fire' src='/assets/img/emojione_fire.png' />

      </div>
       </div>
    </div>
    </Container>
  )
}

export default Hero
