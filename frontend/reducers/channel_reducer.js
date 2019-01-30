import { RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS } from '../actions/channel_actions';
import { merge } from 'lodash';
const _nullChannels = {};

export default (state = _nullChannels, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_CHANNELS:
            return merge({}, state, action.payload.channels)
        case RECEIVE_CHANNEL:
            return merge({}, state, action.payload.channels)
        default:
            return state;
    }
}