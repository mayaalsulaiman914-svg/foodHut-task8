import React from 'react'
import './ChefImage.css'

const ChefImage = ({images}) => {
  return (
    <div className='container-chefimage'>
       <div className="cut">
     
       {images.map((image , index) => (
        <div className={image.className} key={index} >
            <img src={image.src} alt='' />
        </div>
       ))

       }
       </div>
    </div>
  )
}

export default ChefImage
