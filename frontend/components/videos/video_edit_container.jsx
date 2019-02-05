import VideoForm from './video_form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addVideo, updateVideo, getVideo } from '../../actions/videos';


const msp = (state, ownProps) => {
  let _nullVideo = {
    title: "",
    body: "",
    id: null,
    channel_id: null,
    video_url: null,
    thumbnail_url: null,
    }
  return {
    channelId: state.entities.users[state.session.id].channel_id,
    action: 'edit',
    video: state.entities.videos[ownProps.match.params.videoId] || _nullVideo ,
    videoId: ownProps.match.params.videoId,
    btn1: 'upload',
    btn2: 'file-image',
  }
};

const mdp = dispatch => {
  return {
    addVideo: video => dispatch(addVideo(video)),
    updateVideo: video => dispatch(updateVideo(video)),
    getVideo: videoId => dispatch(getVideo(videoId))
  };
};

export default withRouter(connect(msp, mdp)(VideoForm))