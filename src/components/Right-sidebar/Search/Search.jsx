import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <>
      <div className="right-seach-box position-sticky pt-3 pb-3">
        <label className="search-label" for="search-input">
          <input className="search-input" id="search-input" type="search" placeholder='Search Twitter'></input>
        </label>
      </div>
    </>
  );
};

export default Search;