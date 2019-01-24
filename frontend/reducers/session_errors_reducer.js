import {merge} from 'lodash';
import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session';
const _nullErrors = {
  errors: null,
};

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return {};
    default:
      return state;
  }
};