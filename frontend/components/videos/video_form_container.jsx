import VideoForm from './video_form';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

// import {saveVideo} from '../../utils/video';

const msp = state => {
    return {
        channelId: state.entities.users[state.session.id].channel_id
    }
};

// const mdp = dispatch => {
//     return {
//         saveVideo: formData => dispatch(saveVideo(formData))
//     };
// };

export default withRouter(connect(msp, null)(VideoForm))