import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
const msp = (state, ownProps) => {
  return {
    user: state.entity.users[ownProps.match.params.userId]
  };
};

export default withRouter(connect(msp, null)(UserProfile));