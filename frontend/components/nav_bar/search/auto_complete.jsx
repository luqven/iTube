import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class AutoComplete extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchStr: "",
      matchedSearch: [],
      matchedIds: "",
      titleComponents: null,
    }
    this.handleKey = this.handleKey.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentDidMount() {
    this.props.getSearchResults();
    this.setState({ titleComponents: null, searchStr: '' })
  }

  handleKey(e){
    this.setState({ searchStr: e.target.value})
    // if searchStr now empty, clear state and don't search again
    if (e.target.value < 1) {
      this.setState({ titleComponents: null, searchStr: '' })
      return;
    }
    this.handleInput()
  }
  // search hash of {title: video_id} for matching substring
  handleInput(){
    let currentInput = this.state.searchStr.toLowerCase();
    // return null if searchStr is empty: backspacing and first render
    if(currentInput === "" || currentInput.length < 1) {return null};
    let matchedSearch = [];
    // get array of all titles in state
    let allTitles = Object.keys(this.props.search);
    // add titles that match search string to matchedSearch arr
    for (let i = 0; i < allTitles.length; i++) {
      const curTitle = allTitles[i];
      // push into array if title matched
      if (curTitle.toLowerCase().includes( currentInput )) {
         matchedSearch.push(curTitle);
        };
    }
    // store array of title componenets
    let titles = [];
    let indexes = ""; // for other searchResults component that relies on url
    for (let i = 0; i < this.state.matchedSearch.length; i++) {
      const curTitle = this.state.matchedSearch[i];
      const curIndex = this.props.search[curTitle]["id"];
      indexes = indexes.concat(`_id_${curIndex}`);
      titles.push(
        <li onClick={this.handleClick} key={i}> {curTitle} </li>
        )
      };
    // store the array of lis instide a ul element
    let titlesComponents;
    // if no matchdes, do not render ul
    if (titles.length < 1) {
      titlesComponents = null
      } else {
        titlesComponents = (<ul>{titles}</ul>)
      }
    // store the created ul component in state
    this.setState({
      matchedSearch: matchedSearch,
      matchedIds: indexes,
      titleComponents: titlesComponents,
    })
  };

  // take the user to the video show page for that video id
  handleClick(e){
    let searchId = (this.props.search[e.currentTarget.innerText])
    searchId = searchId["id"];
    // reset the component to not render at next url
    this.setState({
        searchStr: "",
        matchedSearch: [],
        titleComponents: null,
      })
    this.props.history.push(`/videos/${searchId}`)
  }

  handleSubmit() {
    this.props.history.push(`/search/${this.state.matchedIds}`)
    this.setState({ titleComponents: null, searchStr: '' })
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit} >
        <input onChange={this.handleKey} type="text" placeholder="Search" value={this.state.searchStr} />
        {this.state.titleComponents}
        <p onClick={this.handleSubmit}><FontAwesomeIcon icon={["fas", "search"]} /></p>
      </form>
    )
  }

}

export default AutoComplete