import React from 'react';

export const Products = (props) => {
  console.log(`Props in Products: ${props.products}`)
  return (
    <div className='grid'>
      {props.products.map((product) => {

        return (
          <div className='tile'>
            <img className='tile-img' src={product.product_image[0].url}/>
            <div className='tile-content-container'>
              <h3 className='tile-title'>{product.title}</h3>
              <p>{product.product_slogan}</p>
              <p>{product.product_description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}