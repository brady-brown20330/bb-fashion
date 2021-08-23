import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Products } from './Products';

const Nav = (props) => {

  const activeStyle = {
    color: 'white',
    backgroundColor: '#EB5646',
    // borderTop: 'groove black 1px',
    // borderLeft: 'groove black 1px',
    // borderRight: 'groove black 1px',
    // borderBottom: 'none',
    // borderRadius: '5px 5px 0px 0px'
  }

  let getCategories = (arr) => {
    let categories = []
    for (let i = 0; i < arr.length; i++) {
      categories.push(arr[i].category)
    }
    return categories;
  }

  let uniq = a => [...new Set(a)];

  // if (categories.length === 0) return <div></div>
  return (
    <nav>
      <ul className='nav-ul'>
        <button className='nav-li' onClick={props.handleFilterReset}>All</button>
        {uniq(getCategories(props.products)).map((product, key) => {
          return (
          <button className='nav-li' key={key} onClick={props.handleNavClick}>
            {product}
          </button>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav;