import Channel from './channel'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getChannel, getAllChannels } from '../../actions/channel_actions';
import { getAllVideos } from "../../actions/videos";
import { closeModal } from '../../actions/modal_actions';



const msp = (state, ownProps) => {
	
	return {
		channel: state.entities.channels[ownProps.match.params.channelId] || {},
		channelId: ownProps.match.params.channelId,
		videos: Object.values(state.entities.videos) || [],
	}
}

const mdp = dispatch => {
	return {
		getChannel: (channelId) => dispatch(getChannel(channelId)),
		getAllVideos: () => dispatch(getAllVideos()),
		closeModal: () => dispatch(closeModal()),
	}; 	
}

export default withRouter(connect(msp, mdp)(Channel))