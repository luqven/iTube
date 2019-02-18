import { fetchUsers, fetchUser } from "../utils/user";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  payload: users,
});

export const receiveUser = users => ({
  type: RECEIVE_USER,
  payload: users,
});


export const getAllUsers = () => dispatch =>
  fetchUsers().then(
    users => dispatch(receiveUsers(users)),
  );

export const getUser = (id) => dispatch =>
  fetchUser(id).then(
    user => dispatch(receiveUser(user)),
  );