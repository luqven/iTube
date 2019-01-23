import React from 'react';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import {Route} from 'react-router-dom';
import Home from './home/home';
import NavBar from './nav_bar/nav_bar'

export default () => {
  
  return(
  <div className="app-container">
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={NavBar} />
    <Route path="/signup" component={SignupContainer}/>
    <Route path="/login" component={LoginContainer}/>
  </div>)
}