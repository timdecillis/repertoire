import React, { useState } from "react";

const Search = ({ currentBand, setCurrentBand, loading }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        value={currentBand}
        placeholder="Enter an artist or band"
        onChange={(e) => setCurrentBand(e.target.value)}
        onClick={(e) => (e.target.placeholder = "")}
      ></input>
      <input
        value="Search"
        disabled={loading}
        className="find-button"
        type="submit"
      />
    </div>
  );
};

export default Search;

//
