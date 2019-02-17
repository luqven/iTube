import { merge } from 'lodash'
import { RECEIVE_SEARCH, RESET_SEARCH } from "../actions/search_actions";
const _nullSearch = {};

const searchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      let searchResult = action.payload.videos
      return searchResult
    case RESET_SEARCH:
      return _nullSearch;
    default:
    return state;
  }
}

export default searchReducer;