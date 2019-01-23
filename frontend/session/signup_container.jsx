import { connect } from 'react-redux';
import { createNewUser } from '../actions/session';
import { Signup } from './signup';

// dont' need access to state in this controller

const mdp = dispatch => {
  return {
    createNewUser: formUser => dispatch(createNewUser(formUser))
  };
};

export default connect(null, mdp)(Signup);