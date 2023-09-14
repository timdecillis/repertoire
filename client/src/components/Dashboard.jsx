import React, { useState } from 'react';

import Instrument from './Instrument.jsx';
import Difficulty from './Difficulty.jsx';
import Search from './Search.jsx';

const Dashboard = ({ handleSearch, choices, songs, setSongs, band, setBand, addSong, signedIn, authUser }) => {

  const [instrument, setInstrument] = useState('');
  const [difficulty, setDifficulty] = useState('');

  if (!signedIn) {
    return null;
  }

  return (
    <div className="dashboard">
      <div className="add-song" >Find a song</div>

      <Instrument instrument={instrument} setInstrument={setInstrument}></Instrument>

      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />

      <Search band={band} setBand={setBand} instrument={instrument} difficulty={difficulty} handleSearch={handleSearch} />


      <div className="choices">
        {choices.length > 0 && <div>{choices.map((choice, i) => <div className="choice" onClick={() => {
          addSong(authUser, choice, band);
        }} key={i}>{choice}</div>)}</div>}
      </div>

    </div>
  );
};

export default Dashboard;