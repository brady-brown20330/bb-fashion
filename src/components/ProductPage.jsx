import React from 'react';

export const ProductPage = (props) => {
  console.log(`props in the product page: ${props.products}`)
  let url = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)

  let currentProduct = props.products.filter((product, i) => {
    return props.products[i].url === url
  })  
  
  console.log('current product: ', url)
  if (!currentProduct[0]) return <h1>404 Error</h1>
  

  return (
    <div>This is a Product</div>
  )
}