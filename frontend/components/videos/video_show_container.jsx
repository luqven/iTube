import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VideoShow from './video_show';
import { getAllVideos, getVideo } from '../../actions/videos';
import { getLikes } from '../../actions/like_actions';
import { resetErrors } from '../../actions/session';

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
    likes: state.entities.likes,
    user: state.session.id,
    errors: state.session.errors,
  };
};

const mdp = dispatch => {
  return {
    getAllVideos: () => dispatch(getAllVideos()),
    getVideo: (videoId) => dispatch(getVideo(videoId)),
    getLikes: (videoId) => dispatch(getLikes(videoId)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default withRouter(connect(msp, mdp)(VideoShow));