import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import Card from '../../components/BaseCard'
import './Signup.css'

const CardUser = styled(Card)`
  padding: 50px;
`

function Signup() {

  const [name, setName] = useState('')
  const history = useHistory()

  function handleInput(){
    history.push('/main')
  }

  return (
    <div>
      <CardUser>
        <h1 className="title">Welcome to CodeLeap network!</h1>
        <form className="form" onSubmit={handleInput}>
          <label htmlFor="username" className="form-label">Please enter your username</label>
          <input id="username" type="text" onChange={e => setName(e.target.value)}></input>
          <input className="form-button" type="submit"></input>
        </form>
      </CardUser>
    </div>
  );
}

export default Signup;
