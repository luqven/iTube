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
      selectedComponent: null,
      render: true
    };

    this.cursorPos = -1;

    this.handleKey = this.handleKey.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetState = this.resetState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.matchedSearchParams = this.matchedSearchParams.bind(this);
    this.storeMatchingTitles = this.storeMatchingTitles.bind(this);
  }

  componentDidMount() {
    this.props.getSearchResults();
    this.setState({ titleComponents: null, searchStr: "" });
  }

  resetState() {
    this.setState({
      searchStr: "",
      matchedSearch: [],
      matchedIds: "",
      titleComponents: null,
      selectedComponent: null,
      render: true
    });
  }

  // helper that handles up / down / or enter keypress
  handleKey(e) {
    const cursorPos = this.cursorPos;
    const maxPos = this.state.matchedSearch.length - 1;
    const selectedComp = this.state.selectedComponent;
    if (e.key === "ArrowDown" && cursorPos < maxPos) {
      this.cursorPos += 1;
    } else if (e.key === "ArrowUp" && cursorPos > -1) {
      this.cursorPos -= 1;
    } else if (e.key === "Backspace" && e.target.value.length < 1) {
      this.resetState();
      return;
    } else if (e.key === "Enter" && selectedComp !== null) {
      this.setState({ render: false });
      if (this.cursorPos === -1) {
        this.handleSubmit();
        return;
      }
      // get the video and render it's show page
      this.props.getVideo(selectedComp);
      this.props.history.push(`/videos/${selectedComp}`);
    }
    this.handleInput(e);
  }

  // on every keypress, search for matching titles to current input
  handleInput(e) {
    let currentInput = e.target.value;
    let searchStr = currentInput;
    let matchedSearch = this.matchedSearchParams(searchStr);
    this.storeMatchingTitles(matchedSearch, searchStr);
  }

  // helper that stores matching titles array
  matchedSearchParams(searchStr) {
    let matchedSearch = [];
    let allTitles = Object.keys(this.props.search);
    // add titles that match search string to matchedSearch arr
    for (let i = 0; i < allTitles.length; i++) {
      const curTitle = allTitles[i];
      if (curTitle.toLowerCase().includes(searchStr)) {
        matchedSearch.push(curTitle);
      }
    }
    return matchedSearch;
  }

  // helper that stores array of title components
  storeMatchingTitles(matchedSearch, searchStr) {
    let titles = [];
    let indexes = ""; // used by other searchResults component that relies on url
    let cursorPos = this.cursorPos; // current pos of cursor
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
    // store inside a ul element, if no matches, do not render ul
    let titlesComponents;
    if (titles.length < 1) {
      titlesComponents = null;
    } else {
      titlesComponents = <ul className="search-results-ul">{titles}</ul>;
    }
    // store the created ul component in state
    this.setState({
      matchedSearch: matchedSearch,
      matchedIds: indexes,
      titleComponents: titlesComponents,
      selectedComponent: selectedComp,
      searchStr: searchStr
    });
  }

  // take the user to the video show page for that video id
  handleClick(e) {
    let classes = e.currentTarget.classList;
    let target = classes[classes.length - 1];
    let searchId = Number(target.slice(4));
    // reset the component to not render at next url
    this.resetState();
    this.props
      .getVideo(searchId)
      .then(this.props.history.push(`/videos/${searchId}`));
  }

  // hide search results when no selection made
  handleBlur() {
    let results = document.querySelectorAll(".search-auto-li");
    if (this.state.selectedComponent === undefined) {
      results.forEach(result => {
        result.classList.add("hidden");
      });
      // add video player keypress event back to DOM
      document.addEventListener("keydown", handleKeyPress);
    } else {
      results.forEach(result => {
        result.classList.remove("hidden");
      });
    }
  }
  // hides results on click outside and removes event listeners
  handleFocus(e) {
    // select entire field when clicking back into search box
    if (e.target.value.length > 1) {
      e.target.select();
    }
    let searchBkg = document.querySelector(".search-bkg");
    let results = document.querySelector(".search-results-ul");

    if (searchBkg) {
      searchBkg.classList.toggle("hidden");
    }
    if (results) {
      results.classList.toggle("hidden");
    }
    // remove video player keypress event from DOM
    document.removeEventListener("keydown", handleKeyPress);
  }

  // take user to search results page
  handleSubmit() {
    let matches = this.state.matchedIds;
    this.props.history.push(`/search/${matches}`);
    this.resetState();
  }

  render() {
    let searchResults;
    // only render autocomplete results when render flag set to true
    if (this.state.render === false) {
      searchResults = null;
    } else {
      searchResults = this.state.titleComponents;
    }

    return (
      <form>
        <section
          className="search-bkg hidden"
          onClick={() => {
            document.querySelector(".search-bkg").classList.toggle("hidden");
          }}
        />
        <input
          onKeyDown={e => this.handleKey(e)}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          type="text"
          placeholder="Search"
          defaultValue={""}
        />
        {searchResults}
        <p onClick={this.handleSubmit}>
          <FontAwesomeIcon icon={["fas", "search"]} />
        </p>
      </form>
    );
  }
}

export default AutoComplete;
