import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import userVideosReducer from "./user_videos_reducer";
import videosReducer from './video_reducer';

export default combineReducers({
  users: usersReducer,
  videos: videosReducer,
  userVideos: userVideosReducer,
});