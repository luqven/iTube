import { searchForTerms } from '../utils/search';

export const RECEIVE_SEARCH = "RECEIVE_SEARCH";

export const receiveSearch = (videos) => {
  return {
    type: RECEIVE_SEARCH,
    payload: videos,
  }
}

export const getSearchResults = () => dispatch => {
  searchForTerms().then(
    videos => dispatch(receiveSearch(videos)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )
}