import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const msp = (state) => {
  return {
    user: state.entities.users[state.session.id],
    videos: state.entities.users[state.session.id].videos
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(msp, mdp)(UserProfile));