import React from 'react'

function TitleCard({title , description}) {
  return (
    <div className='title-card'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TitleCard
