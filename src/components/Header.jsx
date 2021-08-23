import React from 'react';

export const Header = (props) => {
  return (
    <div className='App-header' style={{backgroundImage: `url(${props.header.image.url})`}}>
      <h1>{props.header.title}</h1>
      <p>{props.header.description}</p>
    </div>
    
  )
}