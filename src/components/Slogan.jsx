import React from 'react';
import ReactHtmlParser from "react-html-parser";

export const Slogan = (props) => {

  return (
    <div>
      {ReactHtmlParser(props.richText)}
    </div>
  )
}