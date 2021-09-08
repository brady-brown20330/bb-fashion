import React, { useState } from 'react';

export const BootstrapCarousel = (props) => {
  
  const [index, setIndex] = useState(0);
  const length = props.images.length

  const handleNext = () => {
    setIndex(index === length - 1 ? 0 : index + 1)
  }

  const handlePrev = () => {
    setIndex(index === 0 ? length - 1 : index - 1)
  }

  return (
    <div>
      <div className="carousel-containter">
        <img className="carousel-img" src={props.images[index].url}/>
      </div>
      <button className="carousel-btn" onClick={handlePrev}>Prev</button>
      <button className="carousel-btn" onClick={handleNext}>Next</button>
    </div>
  )
};