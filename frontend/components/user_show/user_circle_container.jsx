import UserCircle from './user_circle';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAllUsers } from '../../actions/user_actions';


const msp = (state) => {
  return {
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    getAllUsers: () => dispatch(getAllUsers()),
    getUser: (id) => dispatch(getAllUsers(id)),
  };
};

export default withRouter(connect(msp, mdp)(UserCircle));