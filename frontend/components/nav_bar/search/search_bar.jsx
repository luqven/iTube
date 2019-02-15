import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_terms: '',
      matched_titles: null,
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    if (e.currentTarget.value.length <= 1) {return this.props.resetSearch();}
    this.setState({search_terms: e.currentTarget.value})
    this.props.getSearchResults(this.state.search_terms)
  }

  render() {
    let foundVideoTitles = Object.values(this.props.search).map((video, idx) => {
      return <li key={idx}>{video.title}</li>
    })
    let searchResults;
    if (foundVideoTitles.length >= 1) { searchResults = <ul>{foundVideoTitles}</ul> }
    if (foundVideoTitles) {
      return(
        <section className="search-container">
          <div>
            <form>
              <input onChange={this.handleInput} type="text" placeholder="Search" />
              <p><FontAwesomeIcon icon={["fas", "search"]} /></p>
              {searchResults}
            </form>
          </div>
        </section>
      )
    }
    return (
      null
    )
  }
}

export default SearchBar;