import React from 'react'
import styled from 'styled-components'

function Button ({ handleClick, children }) {

  const Button = styled.button `
    border: none;
    font-family: 'Roboto';
    font-size: inherit;
    background: #111;
    color: #FFFAFA;
    cursor: pointer;
    padding: 0.5em;
    width: 25%;
    display: inline-block;
    margin: 20px 0px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    outline: none;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    :hover {
        background: #2b2b2b;
    }

    :active {
        background: #2b2b2b;
        top: 2px;
    }

    background: ${props => props.primary && '#111'};
    color: ${props => props.primary ? 'white' : '#111'};
  `

  return (
    <Button primary onClick={handleClick}>{children}</Button>
  );
}

export default Button;
