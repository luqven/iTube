import VideoForm from './video_form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addVideo } from '../../actions/videos';


const msp = state => {
    return {
        channelId: state.entities.users[state.session.id].channel_id
    }
};

const mdp = dispatch => {
    return {
        addVideo: video => dispatch(addVideo(video))
    };
};

export default withRouter(connect(msp, mdp)(VideoForm))