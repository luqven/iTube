import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter} from 'react-router-dom';

import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
import AuthRoute from '../utils/route_util';
import Greeting from './greeting/greeting';
import UserProfile from './user_show/user_profile';


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
        <NavBarContainer />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Greeting} />
        <Route exact path={`/users/profile/`} component={UserProfile} />
        <AuthRoute component={LoginContainer} path="/login" loggedIn={this.props.loggedIn} exact={true} />
        <AuthRoute component={SignupContainer} path="/signup" loggedIn={this.props.loggedIn} exact={true} />
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