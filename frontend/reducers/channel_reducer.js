import { RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS } from '../actions/channel_actions';
const _nullChannels = {};

export default (state = _nullChannels, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_CHANNELS:
            return action.channels
        case RECEIVE_CHANNEL:
            return {[action.channel.id]: action.channel}
        default:
            return state;
    }
}