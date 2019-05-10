import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <ul>
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
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          defaultValue={this.state.text}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
        />
        {this.renderSuggestions()}
        <p>
          <FontAwesomeIcon icon={["fas", "search"]} />
        </p>
      </div>
    );
  }
}
