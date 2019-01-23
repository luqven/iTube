import Greeting from './greeting';
import {connect} from 'react-redux';
import {logout} from '../../actions/session';

const msp = state => {
  return {
    currentUser: {username: ''}
  };
};

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Greeting);