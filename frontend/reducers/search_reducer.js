import { merge } from 'lodash'
import { RECEIVE_SEARCH } from "../actions/search_actions";
const _nullSearch = {};

const searchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      return merge({}, state, {searchTerms: action.payload.videos})
    default:
    return state;
  }
}

export default searchReducer;