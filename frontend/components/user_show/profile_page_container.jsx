import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const msp = (state) => {
  return {
    user: state.entities.users[state.session.id]
  };
};

export default withRouter(connect(msp, null)(UserProfile));