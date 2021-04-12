import React, {useState} from 'react'
import Button from './components/BaseButton'
import Card from './components/BaseCard'
import './App.css'

function App() {

  const [repositories, setRepositories] = useState([
    { id: 1, name: 'repo-1'},
    { id: 2, name: 'repo-2'},
    { id: 3, name: 'repo-3'},
  ])

  function handleAddRepository(){
    setRepositories([
      ...repositories,
      { id: Math.random(), name: "Novo repo" }
    ])
  }

  return (
    <>
      <Card width={'50vw'}>
        <h1>Welcome to codeleap</h1>
        <label for="username">Please enter your username</label>
        <input id="username"></input>
        <Button primary handleClick={handleAddRepository}>Enter</Button>
      </Card>
    </>
  );
}

export default App;
