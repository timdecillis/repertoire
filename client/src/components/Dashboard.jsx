import React, { useState } from 'react';

import Instrument from './Instrument.jsx';
import Difficulty from './Difficulty.jsx';
import Search from './Search.jsx';
import Choices from './Choices.jsx';

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

      <Choices choices={choices} addSong={addSong} band={band} authUser={authUser}/>

    </div>
  );
};

export default Dashboard;