// TO DO

import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userVideosReducer from "./user_videos_reducer";
export default combineReducers({
  users: usersReducer,
  userVideos: userVideosReducer,
});