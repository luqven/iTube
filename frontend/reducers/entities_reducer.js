import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './video_reducer';
import channelsReducer from './channel_reducer';

export default combineReducers({
  users: usersReducer,
  videos: videosReducer,
  channels: channelsReducer,
});