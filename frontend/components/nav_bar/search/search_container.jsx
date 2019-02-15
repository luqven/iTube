import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchBar from './search_bar';

const msp = state => {
  return {

  }
};

const mdp = dispatch => {
  return {

  }
};

export default withRouter(connect(msp, mdp)(SearchBar));
