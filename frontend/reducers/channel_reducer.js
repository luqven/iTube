import { RECEIVE_CHANNEL, RECEIVE_ALL_CHANNELS } from '../actions/channel_actions';
import { RECEIVE_VIDEO } from '../actions/videos';
import { merge } from 'lodash';
const _nullChannels = {};

export default (state = _nullChannels, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type) {
        case RECEIVE_ALL_CHANNELS:
            return merge({}, state, action.payload.channels)
        case RECEIVE_CHANNEL:
            return merge({}, state, action.payload.channels)
        case RECEIVE_VIDEO: // add video id to Channel videoIds
            newState = merge({}, state, action.payload.channels);
            let video = Object.values(action.payload.videos)[0]
            if (!newState[video.channel_id].videoIds.includes(video.id)) {
                newState[video.channel_id].videoIds.push(video.id)
            }
        default:
            return state;
    }
}