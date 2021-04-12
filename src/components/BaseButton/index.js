import styled from 'styled-components';

    const Button = styled.button `
        border: none;
        font-family: 'Lato';
        font-size: inherit;
        background: #111;
        color: #FFFAFA;
        cursor: pointer;
        padding: 1em 1.5em;
        display: inline-block;
        margin: 15px 30px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
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
    `

export default Button