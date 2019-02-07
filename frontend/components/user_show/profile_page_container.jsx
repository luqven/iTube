import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { getUser } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  return {
    users: state.entities.users,
    userId: ownProps.match.params.userId,
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    getUser: id => dispatch(getUser(id))
  };
};

export default withRouter(connect(msp, mdp)(UserProfile));