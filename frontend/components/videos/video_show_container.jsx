import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoShow from './video_show';
import { getAllVideos, getVideo } from '../../actions/videos';

const msp = (state, ownProps) => {
  let _nullVideo = {
    title: 'no video found',
    body: '',
    video_url: 'https://i.stack.imgur.com/PtbGQ.png',
    id: ownProps.match.params.videoId,
    uploader: {id: null, username: 'not found'},
  };

  return {
    video: state.entities.videos[ownProps.match.params.videoId] || _nullVideo,
    videoId: ownProps.match.params.videoId,
    user: state.session.id,
  };
};

const mdp = dispatch => {
  return {
    getAllVideos: () => dispatch(getAllVideos()),
    getVideo: (videoId) => dispatch(getVideo(videoId))
  };
};

export default withRouter(connect(msp, mdp)(VideoShow));