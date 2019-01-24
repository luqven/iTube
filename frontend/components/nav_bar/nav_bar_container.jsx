import React from 'react';
import {connect} from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './nav_bar';

const NavBarContainer = (props, ownProps) => {
  if (props.location.pathname !== "/login" && props.location.pathname !== "/signup") {
    return (<NavBar loggedIn={props.loggedIn} user={props.user}/>)
  } else {
    return null;
  }
};

const msp = (state) => {
  
  return {
    loggedIn: Boolean(state.session.id),
    user: state.entities.users[state.session.id]
  };
};

export default withRouter(connect(msp, null)(NavBarContainer));