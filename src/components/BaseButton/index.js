import React from 'react'
import styled from 'styled-components'

function Button ({ handleClick, children }) {

  const Button = styled.button `
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;

    background: ${props => props.primary && '#111'};
    color: ${props => props.primary ? 'white' : '#111'};
  `

  return (
    <Button primary onClick={handleClick}>{children}</Button>
  );
}

export default Button;
