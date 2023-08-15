import React, { useState } from 'react';

const Dashboard = ({ handleSearch, choices, songs, setSongs, band, setBand, addSong, signedIn, authUser }) => {

  const [instrument, setInstrument] = useState('');
  const [difficulty, setDifficulty] = useState('');

  if (!signedIn) {
    return null;
  }

  return (
    <div className="dashboard">
      <div className="add-song" >Find a song</div>
      <div className="instrument">
        <div className="dash-option" >Instrument</div>
        <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="guitar"></input>
        <label className="radio-button" htmlFor="instrument">Guitar</label>
        <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="drums"></input>
        <label className="radio-button" htmlFor="instrument">Drums</label>
        <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="piano"></input>
        <label className="radio-button" htmlFor="instrument">Piano</label>
      </div>
      <div className="difficulty">
        <div className="dash-option">Difficulty</div>
        <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="beginner"></input>
        <label className="radio-button" htmlFor="difficulty">Beginner</label>
        <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="intermediate"></input>
        <label className="radio-button" htmlFor="difficulty">Intermediate</label>
        <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="advanced"></input>
        <label className="radio-button" htmlFor="difficulty">Advanced</label>
      </div>
      <div className="search">
        <input className="input" placeholder="Enter an artist or band" onChange={e => setBand(e.target.value)}></input>
        <button className="sign-in-button" onClick={() => {
          handleSearch(band, instrument, difficulty);
        }}>Search</button>
      </div>
      <div className="choices">
        {choices.length > 0 && <div>{choices.map((choice, i) => <div className="choice" onClick={() => {
          addSong(authUser, choice, band);
        }} key={i}>{choice}</div>)}</div>}
      </div>
    </div>
  );
};

export default Dashboard;