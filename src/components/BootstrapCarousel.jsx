import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Carousel from 'react-bootstrap/Carousel';

export const BootstrapCarousel = (props) => {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{width: '50%', margin: 'auto'}}>
      {props.images.map((img, i) => {
        return (
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={img.url}
            alt="First slide"
            style={{height: '350px', width: '200px'}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>  
        )
      })}
    </Carousel>
  );
} 