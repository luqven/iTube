import { connect } from 'react-redux';
import { createNewUser } from '../actions/session';
import SessionForm from './session_form';
import { resetErrors } from "../actions/session";

const msp = (state, ownProps) => {
  return {
    user: {
      username: '',
      password: '',
    },
    errors: state.errors.session,
    formType: 'Sign up',
    message: {
      text: 'Sign in',
      url: '/login'
    },
  };
};

const mdp = dispatch => {
  return {
    action: formUser => dispatch(createNewUser(formUser)),
    resetErrors: () => dispatch(resetErrors())
  };
};

export default connect(msp, mdp)(SessionForm);