import React from "react";

import AutoComplete from "./auto_complete_container";

const SearchBar = () => {
  return (
    <section className="search-container">
      <div className="search-outline">
        <AutoComplete />
      </div>
    </section>
  );
};

export default SearchBar;
