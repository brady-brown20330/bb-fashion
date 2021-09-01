import React from 'react';
import ReactHtmlParser from "react-html-parser";

export const Slogan = (props) => {

  // var stringToHTML = function (str) {
  //   var dom = document.createElement('div');
  //   dom.innerHTML = str;
  //   return dom.body;
  // };

// const stringHtml = props.richText
// const doc = new DOMParser().parseFromString(stringHtml, 'text/html');
// let arr = [];

// const showElms = parent => {
//   const { children } = parent;
//   if (children.length) Array.prototype.forEach.call(children, showElms);
//   else console.log(parent.outerHTML);
// }

  return (
    <div>
      {/* {stringToHTML(props.richText)} */}
      {/* {showElms(doc.body)} */}
      {ReactHtmlParser(props.richText)}
    </div>
  )
}