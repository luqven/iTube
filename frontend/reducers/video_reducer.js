import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/videos';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { merge } from 'lodash'
const _nullVideos = {};

export default (state = _nullVideos, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_VIDEOS:
    case RECEIVE_VIDEO:
    case RECEIVE_CHANNEL:
      newState = merge({}, state, action.payload.videos)
      return newState;
    default:
    return state;
  }
};