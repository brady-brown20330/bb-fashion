import React from 'react';

export const Header = (props) => {
  return (
    <div className='App-header'>
      <h1>{props.header.title}</h1>
      <p>{props.header.description}</p>
    </div>
    
  )
}