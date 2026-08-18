import React from 'react'
import './ContainerDescLink.css'

 
 
 const ContainerDescLink = ({children}) => {
   return (
     <div>
      <div className='container-links'>
        {children}
      </div>
     </div>
   )
 }
 
 export default ContainerDescLink
 
   /*  <div className='container-links' style={{border : "2px solid red" , padding: "20px"}}> */
         
    
