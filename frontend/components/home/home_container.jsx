import { getAllVideos } from '../../actions/videos';
import { getAllChannels } from '../../actions/channel_actions';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../home/home';


const msp = state => {
  return {
    videos: Object.values(state.entities.videos)
  };
};

const mdp = dispatch => {
  return {
    getAllVideos: () => dispatch(getAllVideos()),
    getAllChannels: () => dispatch(getAllChannels())
  };
};

export default withRouter(connect(msp, mdp)(Home));