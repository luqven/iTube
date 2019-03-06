import { RECEIVE_VIDEO } from '../actions/videos';
import { RECEIVE_COMMENT, RECEIVE_COMMENTS, REMOVE_COMMENT } from '../actions/comment_actions';
import { merge } from 'lodash';
const _nullComment = {};

export default (state = _nullComment, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return merge({}, state, action.payload.comments)
    case RECEIVE_COMMENT:
      return merge({}, state, action.payload.comments)
    case RECEIVE_VIDEO:
      return merge({}, state, action.payload.comments)
    case REMOVE_COMMENT:
      let newState = merge({}, state);
      delete newState[Object.values(action.payload.comments)[0].id]
      return newState;
    default:
      return _nullComment;
  }
};