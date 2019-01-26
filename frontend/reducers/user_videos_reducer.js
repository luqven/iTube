// user videos reducer
import { merge } from 'lodash';
import { RECEIVE_USER_VIDEOS } from "../actions/videos";
const _nullVideos = [];

export default (state = _nullVideos, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER_VIDEOS:
      newState = action.videos;
      return newState;
    default:
      return state;
  }
};