import React, {useState} from 'react';
import Dashboard from './Dashboard.jsx';
import SongList from './SongList.jsx';
const axios = require('axios');

const App = () => {

  const [band, setBand] = useState('');
  const [songs, setSongs] = useState([]);

  const handleSubmit = () => {
    return axios.post('/findBand', {band: band})
      .then(({data}) => {
        const newSong = data.result.slice(3, -1);
        setSongs(prevSongs => [...prevSongs, newSong]);
      });
  };

  return (
    <div className="container">
      <h1>Repertoire</h1>
      <div>
        <button>Sign In</button>
        <button>Create Account</button>
      </div>
      <SongList songs={songs}/>
      <Dashboard setBand={setBand} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default App;