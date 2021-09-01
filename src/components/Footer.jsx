import React from 'react';

export const Footer = (props) => {
  return (
    <div className='footer-containter'>
      <p>{props.footer.contact_info.name}</p>
      <p>{props.footer.contact_info.address}</p>
      <p>{props.footer.contact_info.email}</p>
    </div>
  )
}