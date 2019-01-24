import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";
import {merge} from 'lodash';
const _nullSession = {
  id: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};