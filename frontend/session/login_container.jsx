import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session';
import Login from './login';

const msp = state => {
  return {
    errors: Object.values(state.errors)
  };
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
});

export default connect(msp, mapDispatchToProps)(Login);
