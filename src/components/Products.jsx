import React from 'react';

export const Products = (props) => {
  
  if (props.filter == undefined) {
    return (
      <div className='grid'>
        {props.products.map((product, key) => {
    console.log(`One Product: ${props.product}`)

          return (
            <div className='tile' key={key}>
              <img className='tile-img' src={product.product_image[0].url}/>
              <div className='tile-content-container'>
                <a href={`/products/${product.url}`}>{product.title}</a>
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
        {filteredProducts.map((product, key) => {
  
          return (
            <div className='tile' key={key}>
              <img className='tile-img' src={product.product_image[0].url}/>
              <div className='tile-content-container'>
                <a href={`/products/${props.products.url}`}>{product.title}</a>
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