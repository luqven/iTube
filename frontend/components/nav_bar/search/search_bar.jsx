import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import AutoComplete from './auto_complete_container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_terms: '',
      matched_titles: null,
    }
  }

  render() {
    let autoComplete;
    if (this.props.search) { autoComplete = <AutoComplete />}
    return (
      <section className="search-container">
        <div>
          <form>
            {autoComplete}
            <Link to={"/search"}><p><FontAwesomeIcon icon={["fas", "search"]} /></p></Link>
          </form>
        </div>
      </section>
    )
  }
}

export default SearchBar;