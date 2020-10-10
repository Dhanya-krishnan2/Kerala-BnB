import React from 'react';
// It adds the button
const Button = ({ text, type }) => (
  <button className='button' type={type}>
    {text}
  </button>
);

export default Button;
