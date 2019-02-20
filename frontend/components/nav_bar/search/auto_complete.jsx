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
      cursorPos: 0,
    }
    this.handleKey = this.handleKey.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  };

  componentDidMount() {
    this.props.getSearchResults();
    this.setState({ titleComponents: null, searchStr: '' })
  }
  
  // handleKeyDown(e){
  //   // FIXME: handle arrow keypress
  //   // this.handleKey(e);
  //   const cursorPos = this.state.cursorPos;
  //   const maxPos = this.state.matchedSearch.length;

  //   const up = 38;
  //   const down  = 40;
  //   const pressedKey = e.keyCode;
  //   // arrow key up/down move to next/prev pos in list
  //   if (pressedKey === up && cursorPos > 0) {
  //     this.setState({
  //       cursorPos: cursorPos - 1,
  //     })
  //   } else if (pressedKey === down && cursorPos < maxPos) {
  //     this.setState({
  //       cursorPos: cursorPos + 1,
  //     })
  //   }
  // }

  handleKey(e){
    debugger
    // set state first, then as a callback handle input
    this.setState({ searchStr: e.target.value}, this.handleInput)
    // if searchStr now empty, clear state and don't search again
    if (e.target.value < 1) {
      this.setState({ titleComponents: null, searchStr: '' })
      return;
    }
  }
  // search hash of {title: video_id} for matching substring
  handleInput(){
    debugger
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
    // store array of title components
    let titles = [];
    let indexes = ""; // for other searchResults component that relies on url
    let cursorPos = this.state.cursorPos; // current pos of cursor
    for (let i = 0; i < this.state.matchedSearch.length; i++) {
      const curTitle = this.state.matchedSearch[i];
      const curIndex = this.props.search[curTitle]["id"];
      indexes = indexes.concat(`_id_${curIndex}`);
      titles.push(
        <li className={`search-auto-li ${cursorPos === curIndex ? 'selected' : null }`} 
        onClick={this.handleClick} key={i}> {curTitle} </li>
        )
      };
    // store the array of lis inside a ul element
    let titlesComponents;
    // if no matches, do not render ul
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