import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleKeyPress } from "../../../utils/key_event_helper";

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: "",
      matchedSearch: [],
      matchedIds: "",
      titleComponents: null,
      cursorPos: -1,
      selectedComponent: null,
      render: true
    };
    this.handleKey = this.handleKey.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.props.getSearchResults();
    this.setState({ titleComponents: null, searchStr: "" });
  }
  // helper that handles up / down / or enter keypress
  handleKey(e) {
    const cursorPos = this.state.cursorPos;
    const maxPos = this.state.matchedSearch.length - 1;
    const selectedComp = this.state.selectedComponent;
    if (e.key === "ArrowDown" && cursorPos < maxPos) {
      this.setState({
        cursorPos: cursorPos + 1
      });
    } else if (e.key === "ArrowUp" && cursorPos > -1) {
      this.setState({
        cursorPos: cursorPos - 1
      });
    } else if (e.key === "Enter" && selectedComp !== null) {
      this.setState({ render: false });
      if (this.state.cursorPos === -1) {
        this.handleSubmit;
        return;
      }
      // get the video from backend
      this.props.getVideo(selectedComp);
      // render the selected component's video show page
      this.props.history.push(`/videos/${selectedComp}`);
    }
    this.handleInput(e);
  }

  // search hash of {title: video_id} for matching substring
  handleInput(e) {
    // if searchStr now empty, clear state and don't search again
    if (e.target.value < 1) {
      this.setState({ titleComponents: null, searchStr: "", render: true });
      return;
    }

    let currentInput = this.state.searchStr.toLowerCase();
    // return null if searchStr is empty: backspacing and first render
    if (currentInput === "" || currentInput.length < 1) {
      return null;
    }
    let matchedSearch = [];
    // get array of all titles in state
    let allTitles = Object.keys(this.props.search);
    // add titles that match search string to matchedSearch arr
    for (let i = 0; i < allTitles.length; i++) {
      const curTitle = allTitles[i];
      // push into array if title matched
      if (curTitle.toLowerCase().includes(currentInput)) {
        matchedSearch.push(curTitle);
      }
    }
    // store array of title components
    let titles = [];
    let indexes = ""; // used by other searchResults component that relies on url
    let cursorPos = this.state.cursorPos; // current pos of cursor
    let selectedComp; // var that stores idx of selected component
    for (let i = 0; i < this.state.matchedSearch.length; i++) {
      const curTitle = this.state.matchedSearch[i];
      const curIndex = this.props.search[curTitle]["id"];
      indexes = indexes.concat(`_id_${curIndex}`);
      if (cursorPos === i) {
        selectedComp = `${curIndex}`;
      }
      titles.push(
        <li
          className={`search-auto-li ${
            cursorPos === i ? "selected" : `res-${curIndex}`
          }`}
          onClick={this.handleClick}
          key={i}
        >
          {" "}
          {curTitle}{" "}
        </li>
      );
    }
    // store the array of lis inside a ul element
    let titlesComponents;
    // if no matches, do not render ul
    if (titles.length < 1) {
      titlesComponents = null;
    } else {
      titlesComponents = <ul>{titles}</ul>;
    }
    // store the created ul component in state
    this.setState({
      matchedSearch: matchedSearch,
      matchedIds: indexes,
      titleComponents: titlesComponents,
      selectedComponent: selectedComp
    });
  }

  // take the user to the video show page for that video id
  handleClick(e) {
    let classes = e.currentTarget.classList;
    let target = classes[classes.length - 1];
    let searchId = Number(target.slice(4));
    // reset the component to not render at next url
    this.setState({
      searchStr: "",
      matchedSearch: [],
      titleComponents: null
    });
    this.props
      .getVideo(searchId)
      .then(this.props.history.push(`/videos/${searchId}`));
  }
  // remove event listeners when not searching
  handleBlur() {
    if (this.state.selectedComponent !== undefined) {
      return;
    }
    let results = document.querySelectorAll(".search-auto-li");
    results.forEach(result => {
      result.classList.toggle("hidden");
    });
    document.addEventListener("keydown", handleKeyPress);
  }
  // take user to search results page
  handleSubmit() {
    let matches = this.state.matchedIds;
    this.props.history.push(`/search/${matches}`);
    this.setState({ titleComponents: null, searchStr: "" });
  }

  render() {
    let comps;
    // only render autocomplete results when render flag set to true
    if (this.state.render === false) {
      comps = null;
    } else {
      comps = this.state.titleComponents;
    }

    return (
      <form>
        <input
          onKeyDown={e => this.handleKey(e)}
          onFocus={e => document.removeEventListener("keydown", handleKeyPress)}
          onChange={e =>
            this.setState({ searchStr: e.target.value }, this.handleInput(e))
          }
          onBlur={this.handleBlur}
          type="text"
          placeholder="Search"
          value={this.state.searchStr}
        />
        {comps}
        <p onClick={this.handleSubmit}>
          <FontAwesomeIcon icon={["fas", "search"]} />
        </p>
      </form>
    );
  }
}

export default AutoComplete;
