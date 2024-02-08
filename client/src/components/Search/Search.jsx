import React, { useState } from "react";

const Search = ({ currentBand, setCurrentBand, loading }) => {
  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Enter an artist or band"
        onChange={(e) => setCurrentBand(e.target.value)}
        onClick={(e) => (e.target.placeholder = "")}
      ></input>
      <input
        value={currentBand}
        disabled={loading}
        className="find-button"
        type="submit"
        value="Search"
      />
    </div>
  );
};

export default Search;
