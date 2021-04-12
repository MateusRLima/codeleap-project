import styled from "styled-components";

function Card({children}) {
  const Card = styled.div.attrs(props => ({
    width: props.width || '1em'
  })) `
    display: flex;
    flex-direction: column;
    background-color: #FFFAFA;
    padding: 1em;
  `

  return(
    <Card>
      {children}
    </Card>
  )
}


export default Card