import React, {useState} from 'react';
import Dashboard from './Dashboard.jsx';
import SongList from './SongList.jsx';
const axios = require('axios');

const App = () => {


  const [songs, setSongs] = useState([]);
  const [choices, setChoices] = useState([]);

  const handleSearch = (band) => {
    return axios.post('/findBand', {band: band})
      .then(({data}) => {
        console.log(data)
        // setChoices(prevSongs => [...prevSongs, newSong]);
      });
  };

  return (
    <div className="container">
      <h1>Repertoire</h1>
      <div>
        <button className="user-button">Sign In</button>
        <button className="user-button">Create Account</button>
      </div>
      <SongList songs={songs}/>
      <Dashboard setChoices={setChoices} choices={choices} handleSearch={handleSearch}/>
    </div>
  );
};

export default App;