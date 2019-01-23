import {combineReducers} from 'redux';
import sessionReducer from './sessions';

export default combineReducers({
  session: sessionReducer,
});