import React, { useState } from 'react';

const Dashboard = ({ handleSearch, choices, songs, setSongs, band, setBand, addSong }) => {

  const [instrument, setInstrument] = useState('');
  const [difficulty, setDifficulty] = useState('');


  return (
    <div className="dashboard">
      <div className="instrument">
        <h2>Add a song</h2>
        <h3>Instrument</h3>
        <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="guitar"></input>
        <label htmlFor="instrument">Guitar</label>
        <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="drums"></input>
        <label htmlFor="instrument">Drums</label>
        <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="piano"></input>
        <label htmlFor="instrument">Piano</label>
      </div>
      <div className="difficulty">
        <h3>Difficulty</h3>
        <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="beginner"></input>
        <label htmlFor="difficulty">Beginner</label>
        <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="intermediate"></input>
        <label htmlFor="difficulty">intermediate</label>
        <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="advanced"></input>
        <label htmlFor="difficulty">Advanced</label>
      </div>
      <div className="search">
        <input placeholder="Enter an artist or band" onChange={e => setBand(e.target.value)}></input>
        <button onClick={() => {
          handleSearch(band, instrument, difficulty);
        }}>Search</button>
      </div>
      <div className="choices">
        {choices.length > 0 && <div>{choices.map((choice, i) => <div className="choice" onClick={() => {
          addSong(choice);
        }} key={i}>{choice}</div>)}</div>}
      </div>
    </div>
  );
};

export default Dashboard;