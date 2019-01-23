import { RECEIVE_CURRENT_USER } from "../actions/session";
import merge from 'lodash';
const _nullUser = {}

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};