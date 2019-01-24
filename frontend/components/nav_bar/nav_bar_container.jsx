import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav_bar';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={NavBar} />
    </Switch>
  )
}