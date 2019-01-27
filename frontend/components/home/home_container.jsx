import { getAllVideos } from '../../actions/videos';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../home/home';


const msp = state => {
  return {
    videos: state.entities.videos
  };
};

const mdp = dispatch => {
  return {
    getAllVideos: () => dispatch(getAllVideos())
  };
};

export default withRouter(connect(msp, mdp)(Home));