import { RECEIVE_VIDEO } from '../actions/videos';
import { RECEIVE_LIKE, RECEIVE_LIKES, REMOVE_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';
const _nullLike = {};

export default (state = _nullLike, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LIKES:
      return merge({}, state, action.payload.likes)
    case RECEIVE_LIKE:
    return merge({}, state, action.payload.likes)
    case RECEIVE_VIDEO:
      return merge({}, state, action.payload.likes)
    case REMOVE_LIKE:
      let newState = merge({}, state);
      delete newState[Object.values(action.payload.likes)[0].id]
      return newState;
    default:
      return state;
  }
};