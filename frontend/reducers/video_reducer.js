import { RECEIVE_VIDEOS, RECEIVE_VIDEO } from '../actions/videos';
const _nullVideos = [];

export default (state = _nullVideos, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    case RECEIVE_VIDEO:
      return action.video
    default:
    return state;
  }
};