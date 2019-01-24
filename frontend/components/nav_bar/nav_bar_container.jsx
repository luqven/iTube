import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBar from './nav_bar';

const NavBarContainer = (props, ownProps) => {
  if (props.location.pathname !== "/login" && props.location.pathname !== "/signup") {
    return (<NavBar />)
  } else {
    return null;
  }
};

export default withRouter(NavBarContainer);