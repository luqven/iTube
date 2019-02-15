import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getSearchResults, resetSearch } from "../../../actions/search_actions";

import SearchBar from './search_bar';

const msp = state => {
  return {
    search: state.search,
  }
};

const mdp = dispatch => {
  return {
    getSearchResults: (searchTerms) => dispatch(getSearchResults(searchTerms)),
    resetSearch: () => dispatch(resetSearch()),
  }
};

export default withRouter(connect(msp, mdp)(SearchBar));
