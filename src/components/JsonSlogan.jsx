import React from 'react';

export const JsonSlogan = (props) => {
  // console.log(`props in the JSON thing: ${props.slogan}`)

  let parser = (children) => {
    return children.map((child, i) => {
      if (child.type === "p") return <p>{child.children[0].text}</p>
    }
    )}
  return (
    <div>
      {parser(props.slogan.children)}
    </div>
  )
};
