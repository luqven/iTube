import VideoForm from './video_form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addVideo, getVideo} from '../../actions/videos';


const msp = state => {
    return {
        channelId: state.entities.users[state.session.id].channel_id,
        action: 'upload',
        video: {
            title: "",
            body: "",
            id: null,
            channel_id: null,
            video_url: null,
            thumbnail_url: null,
        },
        btn1: 'upload',
        btn2: 'file-image',
    }
};

const mdp = dispatch => {
    return {
        addVideo: video => dispatch(addVideo(video)),
        getVideo: videoId => dispatch(getVideo(videoId))
    };
};

export default withRouter(connect(msp, mdp)(VideoForm))