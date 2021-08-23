import React from 'react';

export const Products = (props) => {

  let gridReturner = (array) => {
    return (
      <div className='grid'>
        {array.map((product, key) => {
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
  }
  if (props.filter === undefined) {
    return gridReturner(props.products)
  } else {
    let filteredProducts = props.products.filter((product) => product.category === props.filter)
    return gridReturner(filteredProducts)
  }
}