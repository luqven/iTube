import VideoForm from './video_form';
import {connect} from 'react-redux';

const msp = state => {
    debugger
    return {
        channelId: state.entities.users[state.session.id]
    }
};

// const mdp = dispatch => {
//     return {

//     };
// };


export default connect(msp, null)(VideoForm)