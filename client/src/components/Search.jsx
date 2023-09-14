import React, { useState } from 'react';

const Search = ({ band, setBand, instrument, difficulty, handleSearch }) => {

  return (
    <div className="search">
      <input className="input" placeholder="Enter an artist or band" onChange={e => setBand(e.target.value)}></input>
      <button className="sign-in-button" onClick={() => {
        handleSearch(band, instrument, difficulty);
      }}>Search</button>
    </div>
  );
};

export default Search;