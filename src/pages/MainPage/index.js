import Button from '../../components/BaseButton'
import Card from '../../components/BaseCard'


function Main() {
  return (
    <div>
      <Card>
        <h1>Welcome to CodeLeap MainPage!</h1>
        <label for="username">Please enter your username</label>
        <input></input>
        <Button>Enter</Button>
      </Card>
    </div>
  );
}

export default Main;