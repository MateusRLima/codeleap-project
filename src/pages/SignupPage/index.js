import React, { useState } from 'react'
import Button from '../../components/BaseButton'
import Card from '../../components/BaseCard'
import styled from 'styled-components'
import './index.css'

function Main() {

  const [name, setName] = useState('')

  const handleSubmit = () => {
    alert(`Welcome ${name}`)
  }

  const CardUser = styled(Card)`
    border: 1px solid #CCCCCC;
    width: 100%;
    padding: 1% 5%;
  `

  return (
    <>
      <CardUser>
        <div className="cardTitle">
          <h1>Welcome to CodeLeap network!</h1>
        </div>
        <div className="cardContainer">
          <form className="cardForm">
            <label>
              Please enter your username
            </label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)}
            />
          </form>
        </div>
        <div className="cardAction">
          <Button handleClick={handleSubmit}>Enter</Button>
        </div>
      </CardUser>
    </>
  );
}

export default Main;