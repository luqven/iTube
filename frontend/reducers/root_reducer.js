import {combineReducers} from 'redux';
import sessionReducer from './sessions_reducer';
import errorsReducer from './errors_reducer';
import entities_reducer from './entities_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
  entities: entities_reducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
});
