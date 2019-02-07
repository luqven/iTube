import { RECEIVE_CURRENT_USER } from "../actions/session";
import { RECEIVE_USERS, RECEIVE_USER } from "../actions/user_actions";
import {merge} from 'lodash';
const _nullUser = {}

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.payload.users);
    case RECEIVE_USERS:
      return merge({}, state, action.payload.users);
    case RECEIVE_USER:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }
};