import {combineReducers} from 'redux';
import sessionReducer from './sessions_reducer';
import errorsReducer from './errors_reducer';
import entitites_reducer from './entitites_reducer';

export default combineReducers({
  entitites: entitites_reducer,
  session: sessionReducer,
  errors: errorsReducer,
});
