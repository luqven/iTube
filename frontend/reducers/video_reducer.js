import { RECEIVE_VIDEOS } from '../actions/videos';
const _nullVideos = [];

export default (state = _nullVideos, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    default:
    return state;
  }
};