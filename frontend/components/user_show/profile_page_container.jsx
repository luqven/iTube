import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { getUserVideos } from '../../actions/videos';

const msp = (state) => {
  return {
    user: state.entities.users[state.session.id],
    videos: state.entities.userVideos || []
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    getUserVideos: (user_id) => dispatch(getUserVideos(user_id))
  };
};

export default withRouter(connect(msp, mdp)(UserProfile));