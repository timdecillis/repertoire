import React, { useState } from 'react';

const Dashboard = ({ handleSearch, choices, songs, setSongs}) => {
  const [band, setBand] = useState('');


  return (
    <div className="dashboard">
      <div className="search">
        <input placeholder="Enter an artist or band" onChange={e => setBand(e.target.value)}></input>
        <button onClick={() => {
          handleSearch(band);
        }}>Search</button>
      </div>
      <div className="choices">
        {choices.length > 0 && <div>{choices.map((choice, i) => <div onClick={() => {
          setSongs([...songs, choice]);
        }} key={i}>{choice}</div>)}</div>}
      </div>
    </div>
  );
};

export default Dashboard;