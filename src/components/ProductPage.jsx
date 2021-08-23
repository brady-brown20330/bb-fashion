import React from 'react';
import { BootstrapCarousel } from './BootstrapCarousel';
import { Products } from './Products';

export const ProductPage = (props) => {

  let url = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)

  let currentProduct = props.products.filter((product, i) => {
    return props.products[i].url === url
  })  
  
  let getRelatedProducts = (productsList, uidArr) => {
    let relatedProducts = [];
    if (!uidArr) return relatedProducts;
    // if the uid of the product shows up in related, push it to a new array
    for (let i = 0; i < productsList.length; i++) {
      for (let j = 0; j < uidArr.length; j++) {
        if (productsList[i].uid === uidArr[j].uid) relatedProducts.push(productsList[i])
      } 
    }
    return relatedProducts;
  }

  if (!currentProduct[0]) return <h1>404 Error</h1>

  return (
    <div>
      <h1>{currentProduct[0].title}</h1>
      <BootstrapCarousel images={currentProduct[0].product_image}/>
      <div>${currentProduct[0].price}</div>
      <p>{currentProduct[0].product_slogan}</p>
      <p>{currentProduct[0].product_description}</p>

      <div>Related Items:
        <Products products={getRelatedProducts(props.products, currentProduct[0].related_products)}/>
      </div>
    </div>
  )
}