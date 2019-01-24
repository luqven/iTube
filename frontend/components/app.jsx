import React from 'react';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import {Route} from 'react-router-dom';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
// import AuthButtons from './nav_bar/auth_button';
import Greeting from './greeting/greeting';

export default () => {
  
  return(
  <div className="app-container">
    <NavBarContainer/>
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={Greeting} />
    <Route path="/signup" component={SignupContainer}/>
    <Route path="/login" component={LoginContainer}/>
  </div>)
}