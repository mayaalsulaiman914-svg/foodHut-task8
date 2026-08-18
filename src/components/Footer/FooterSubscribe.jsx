import React from 'react'

const FooterSubscribe = ({title , text}) => {
  return (
    <div className='cont-subsc'>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="search">
        <input type='text' className='inputEmail' placeholder='Email' ></input>
        <button className='btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default FooterSubscribe
