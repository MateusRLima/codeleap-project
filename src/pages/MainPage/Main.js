import Button from '../../components/BaseButton'
import Card from '../../components/BaseCard'
import styled from "styled-components";


const CardMain = styled(Card)`
  height: 100%;
`

function Main() {
  return (
    <div>
      <CardMain>
        <h1>Welcome to CodeLeap MainPage!</h1>
        <label for="username">Please enter your username</label>
        <input></input>
        <Button>Enter</Button>
      </CardMain>
    </div>
  );
}

export default Main;