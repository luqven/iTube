import React from 'react';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import {Route} from 'react-router-dom';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
import AuthRoute from '../utils/route_util';
import Greeting from './greeting/greeting';

export default (props) => {
  
  return(
  <div className="app-container">
    <NavBarContainer/>
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={Greeting} />
    <AuthRoute component={LoginContainer} path="/login" loggedIn={props.loggedIn} exact={true} />
    <AuthRoute component={SignupContainer} path="/signup" loggedIn={props.loggedIn} exact={true} />

  </div>)
}