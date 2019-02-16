import React from 'react'

class AutoComplete extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchStr: "",
      matchedSearch: [],
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getSearchResults();
  }

  handleInput(e){
    let currentInput = e.currentTarget.value
    let matchedSearch = [];
    let allTitles = Object.keys(this.props.search);
    for (let i = 0; i < allTitles.length; i++) {
      const curTitle = allTitles[i];
      if (curTitle.includes(currentInput)) { matchedSearch.push(curTitle)};
    }
    this.setState({
      matchedSearch: matchedSearch,
    })
  }

  handleClick(e){
    let searchId = (this.props.search[e.currentTarget.innerText])
    searchId = searchId["id"];
    debugger
    this.props.history.push(`/videos/${searchId}`)
  }

  render() {
    let titles = [];
    for (let i = 0; i < this.state.matchedSearch.length; i++) {
      const curTitle = this.state.matchedSearch[i];
      const curIndex = this.props.search[curTitle];
      debugger
      titles.push(
        <li onClick={this.handleClick} key={i}> {curTitle} </li>
      )
    }
    let titlesList = (<ul>{titles}</ul>)
    // only render ul if titles are found
    if (titles.length < 1) {titlesList = null};
    return(
      <>
        <input onChange={this.handleInput} type="text" placeholder="Search" />
        {titlesList}
      </>
    )
  }

}

export default AutoComplete