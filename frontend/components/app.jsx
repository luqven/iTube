import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch} from 'react-router-dom';

import AuthRoute from '../utils/route_util';
import LoggedInAuth from '../utils/logged_in_util';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
import Greeting from './greeting/greeting';
import UserProfile from './user_show/profile_page_container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      loggedIn: this.props.loggedIn,
    }
  }

  render(){
    return (
      <div className="app-container">
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Greeting} />
        <LoggedInAuth component={UserProfile} exact path={`/users/profile/`} loggedIn={this.props.loggedIn} exact={true}/>
        <AuthRoute component={LoginContainer} path="/login" loggedIn={this.props.loggedIn} exact={true} />
        <AuthRoute component={SignupContainer} path="/signup" loggedIn={this.props.loggedIn} exact={true} />
        <NavBarContainer />
      </div>)
  }
}

const msp = state => {
  return {
    users: state.entities.users,
    loggedIn: state.loggedIn,
  };
};

export default withRouter(connect(msp, null)(App))