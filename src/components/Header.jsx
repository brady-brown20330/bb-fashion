import React from 'react';

export const Header = (props) => {
  console.log(`Props in header: ${props}`)
  return (
    <div className='App-header'>
      <h1>{props.header.title}</h1>
      <p>{props.header.description}</p>
    </div>
    
  )
}