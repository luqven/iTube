import { searchForTerms } from '../utils/search';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RESET_SEARCH = "RESET_SEARCH";

export const receiveSearch = (videos) => {
  return {
    type: RECEIVE_SEARCH,
    payload: videos,
  }
}
export const resetSearch = () => {
  return {
    type: RESET_SEARCH,
  }
}

export const getSearchResults = (searchTerms) => dispatch => {
  searchForTerms(searchTerms).then(
    videos => dispatch(receiveSearch(videos)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  )
}