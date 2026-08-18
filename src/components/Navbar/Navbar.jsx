 import { useState } from 'react'
import './Navbar.css'
 

const Navbar = ({items , darkMode , setDarkMode}) => {
 const [open , setOpen] = useState(false)
  return (
    <nav className='navBar'>
      <img src={darkMode ? '/assets/img/Logo-dark.png' : '/assets/img/Logo.png'} alt='logo image'/>
  
      <div className={open ? "navItem active" : "navItem"}  >
         <ul >
          {
            items?.map((item , index) => {
              return (
                <li key={index}><a href=''>{item?.content}</a></li>
              )
            })
          }
        
      </ul>
        <button className='mode' onClick={() => setDarkMode(prev => !prev)}> {darkMode ? "Light Mode" : "Dark Mode"}</button>
 
      </div>
        <button className='bars' onClick={() => setOpen(!open)}><i className="fa-solid fa-bars"></i></button>
    </nav>
  )
}

export default Navbar
