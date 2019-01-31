import VideoForm from './video_form';
import {connect} from 'react-redux';
import {saveVideo} from '../../utils/video';

const msp = state => {
    return {
        channelId: state.entities.users[state.session.id]
    }
};

const mdp = dispatch => {
    return {
        saveVideo: formData => dispatch(saveVideo(formData))
    };
};

export default connect(msp, mdp)(VideoForm)