import React from 'react'

const FooterLinks = ({title , links}) => {
  return (
    <div className='con-link' >
      <h2>{title}</h2>
      <ul>

    {links.map((link) => (
        <li key={link.href}> <a href={link.href}>{link.text}</a></li>
                
         ))}
        <li>
             
        </li>
      </ul>
      
    </div>
  )
}

export default FooterLinks
