import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchBar = () => {
  return (
    <section className="search-container">
      <div>
        <form>
          <input type="text" name="" id="" placeholder="Search" />
          <p><FontAwesomeIcon icon={["fas", "search"]} /></p>
        </form>
      </div>
    </section>
  )
}

export default SearchBar;