import React from 'react'
import './Footer.css'


const FooterInfo = ({title , text , icons}) => {
  return (
    <div className='footer-info'>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="icons">
        {icons.map((icon) => (
            <a href={icon.href}><img src={icon.src}/></a>
        ))}
      </div>
    </div>
  )
}

export default FooterInfo
