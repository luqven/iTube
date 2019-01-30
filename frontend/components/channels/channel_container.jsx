import Channel from './channel'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getChannel, getAllChannels } from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';



const msp = (state, ownProps) => {
	debugger
    return {
		channel: state.entities.channels[ownProps.match.params.channelId] || {channel: {}, videos: []},
		channelId: ownProps.match.params.channelId,
    }
}

const mdp = dispatch => {
	return {
		getChannel: (channelId) => dispatch(getChannel(channelId)),
		getAllChannels: () => dispatch(getAllChannels()),
		closeModal: () => dispatch(closeModal()),
	}; 	
}

export default withRouter(connect(msp, mdp)(Channel))