import React from 'react';
import styled from 'styled-components'


function BaseCard({ children, width, height }) {

  const Card = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fffafa;
    width: ${width};
    height: ${height}
  `

  return (
    <Card>
      {children}
    </Card>
  )
}

export default BaseCard;
