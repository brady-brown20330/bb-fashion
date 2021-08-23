import React from 'react';
import { BootstrapCarousel } from './BootstrapCarousel';

export const ProductPage = (props) => {

  let url = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)

  let currentProduct = props.products.filter((product, i) => {
    return props.products[i].url === url
  })  
  
  console.log('current product: ', currentProduct[0])
  if (!currentProduct[0]) return <h1>404 Error</h1>

  return (
    <div>
      <h1>{currentProduct[0].title}</h1>
      <BootstrapCarousel images={currentProduct[0].product_image}/>
      <div>${currentProduct[0].price}</div>
      <p>{currentProduct[0].product_slogan}</p>
      <p>{currentProduct[0].product_description}</p>
    </div>
  )
}