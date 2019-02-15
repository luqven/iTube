import { merge } from 'lodash'
import { RECEIVE_SEARCH, RESET_SEARCH } from "../actions/search_actions";
const _nullSearch = {};

const searchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      // debugger
      let searchResult = action.payload.videos
      // if (Object.values(searchResult).length === 10) { searchResult = {}; }
      return merge({}, state, searchResult)
    case RESET_SEARCH:
      return _nullSearch;
    default:
    return state;
  }
}

export default searchReducer;