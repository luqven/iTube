import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleKeyPress } from "../../../utils/key_event_helper";

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      suggestions: []
    };
    this.cursorPos = -1;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.suggestionSelected = this.suggestionSelected.bind(this);
  }

  componentDidMount() {
    this.props.getSearchResults();
  }

  // helper that filters search results, stores search string
  handleInputChange(e) {
    let searchString = e.target.value;
    let suggestions = [];
    let items = Object.keys(this.props.search);

    if (searchString.length > 0) {
      const regex = new RegExp(`^${searchString}`, "i");
      // filter suggestions by those that return true for regex
      suggestions = items.sort().filter(v => regex.test(v.toLocaleLowerCase()));
    }
    this.setState({ suggestions: suggestions, text: searchString });
  }

  // helper that handles up / down / or enter keypress
  handleKeyDown(e) {
    const cursorPos = this.cursorPos;
    const maxPos = this.state.suggestions.length - 1;
    let selectedComp;

    this.state.suggestions.forEach((item, idx) => {
      if (idx === cursorPos) {
        selectedComp = item;
      }
    });

    if (e.key === "ArrowDown" && cursorPos < maxPos) {
      this.cursorPos += 1;
    } else if (e.key === "ArrowUp" && cursorPos > -1) {
      this.cursorPos -= 1;
    } else if (e.key === "Backspace" && e.target.value.length < 1) {
      this.setState({
        text: "",
        suggestions: []
      });
      return;
    } else if (e.key === "Enter") {
      if (selectedComp) {
        this.suggestionSelected(selectedComp);
        return;
      } else {
        this.handleSubmit(e);
        return;
      }
    }
    this.handleInputChange(e);
  }

  // helper that modifies state and redirect to show page on selection
  suggestionSelected(value) {
    this.setState(
      {
        text: value,
        suggestions: []
      },
      () => {
        this.props.history.push(`/videos/${this.props.search[value].id}`);
      }
    );
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
    if (results !== null) {
      results.classList.remove("hidden");
    }
    // remove video player keypress event from DOM
    document.removeEventListener("keydown", handleKeyPress);
  }

  handleBlur() {
    let results = document.querySelector(".search-results-ul");
    if (results !== null) {
      results.classList.add("hidden");
    }
    // add video player keypress event back to DOM
    document.addEventListener("keydown", handleKeyPress);
  }

  handleSubmit(e) {
    // e.preventDefault();
    let suggestions = this.state.suggestions;
    let searchOptions = this.props.search;
    let matchedIds = "";

    suggestions.map(item => {
      let itemId = searchOptions[item].id;
      matchedIds = matchedIds.concat(`_id_${itemId}`);
    });

    this.props.history.push(`/search/${matchedIds}`).then(
      this.setState({
        text: "",
        suggestions: []
      })
    );
  }

  // helper that renders a unordered-list of matching suggestions
  renderSuggestions() {
    let suggestions = this.state.suggestions;
    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <ul className="search-results-ul">
          {suggestions.map((item, idx) => (
            <li
              onClick={() => this.suggestionSelected(item)}
              key={idx}
              className={`search-auto-li ${
                this.cursorPos === idx ? "selected" : `res-${idx}`
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="search-bar">
        <section
          className="search-bkg hidden"
          onClick={() => {
            document.querySelector(".search-bkg").classList.toggle("hidden");
          }}
        />
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          defaultValue={this.state.text}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        {this.renderSuggestions()}
        <p onClick={this.handleSubmit}>
          <FontAwesomeIcon icon={["fas", "search"]} />
        </p>
      </div>
    );
  }
}
