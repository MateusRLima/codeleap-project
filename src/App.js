import React from 'react'
import Signup from './pages/SignupPage'
import Main from './pages/MainPage'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Signup} />
          <Route path="/main" component={Main} />
        </Switch>
      </ BrowserRouter>
  );
}

export default App;
