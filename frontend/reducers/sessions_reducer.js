import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";
import {merge} from 'lodash';
import { closeModal } from "../actions/modal_actions";
const _nullSession = {
  id: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id};
    case LOGOUT_CURRENT_USER:
      closeModal();
      return _nullSession;
    default:
      return state;
  }
};