import React from 'react';

export const Products = (props) => {
  console.log(`filter in Products: ${props.filter}`)
  
  if (props.filter == undefined) {
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
  } else {
    let filteredProducts = props.products.filter((product) => product.category === props.filter)
    return (
      <div className='grid'>
        {filteredProducts.map((product) => {
  
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
}