import { getAllVideos } from '../../actions/videos';
import { getAllChannels } from '../../actions/channel_actions';
import { getUser, getAllUsers } from '../../actions/user_actions';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../home/home';


const msp = state => {
  return {
    videos: Object.values(state.entities.videos),
    channels: Object.values(state.entities.channels),
    users: state.entities.users,
  };
};

const mdp = dispatch => {
  return {
    getAllVideos: () => dispatch(getAllVideos()),
    getAllChannels: () => dispatch(getAllChannels()),
    getAllUsers: () => dispatch(getAllUsers())
  };
};

export default withRouter(connect(msp, mdp)(Home));