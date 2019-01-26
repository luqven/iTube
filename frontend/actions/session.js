import { postUser, deleteSession, postSession } from '../utils/session';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";
import {closeModal} from './modal_actions';
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
})

export const resetErrors = () => ({
  type: RESET_ERRORS,
});

export const createNewUser = user => dispatch => 
  postUser(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const login = user => dispatch =>
 postSession(user).then(
   user => dispatch(receiveCurrentUser(user)),
   errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => dispatch => (
  deleteSession().then(
  () => {
    dispatch(logoutCurrentUser());
    dispatch(closeModal());
  })
);
