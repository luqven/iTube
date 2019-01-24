import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session';
import SessionForm from './session_form';

const msp = (state, ownProps) => {
  
  return {
    user: {
      username: '',
      password: '', 
    },
    errors: state.errors.session,
    formType: 'Sign in',
    message: {
      text: 'Create account',
      url: '/signup'}
  };
};

const mapDispatchToProps = dispatch => ({
  action: formUser => dispatch(login(formUser)),
});

export default connect(msp, mapDispatchToProps)(SessionForm);
