import React, {useState, useEffect} from 'react';
import Dashboard from './Dashboard.jsx';
import SongList from './SongList.jsx';
const axios = require('axios');

const App = () => {

  const [songs, setSongs] = useState([]);
  const [choices, setChoices] = useState([]);
  const [band, setBand] = useState('');

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    return axios.get('/getSongs')
      .then(({data}) => {
        setSongs(data);
      });
  };

  const handleSearch = (band, instrument, difficulty) => {
    return axios.post('/findBand', {band: band, instrument: instrument, difficulty: difficulty})
      .then(({data}) => {
        if (data.songs[0] === 'song 1') {
          setChoices(['Your search did not match any results :(']);
        } else {
          setChoices(data.songs);
          setBand(data.artist);
        }
      });
  };

  const addSong = (song) => {
    return axios.post('/addSong', {song: song, artist: band})
      .then(() => {
        getSongs();
      });
  };

  const deleteSong = (song, artist) => {
    return axios.delete('/deleteSong', {data: {song: song, artist: artist}})
      .then(() => {
        getSongs();
      });
  };

  const handleCompleted = (song, artist) => {
    return axios.put('/updateSong', {song: song, artist: artist})
      .then(() => {
        getSongs();
      });
  };
  const handleNotes = (song, artist, notes) => {
    return axios.put('/updateNotes', {song: song, artist: artist, notes: notes})
      .then(() => {
        getSongs();
      });
  };



  return (
    <div className="container">
      <h1>Repertoire</h1>
      <div>
        <button className="user-button">Sign In</button>
        <button className="user-button">Create Account</button>
      </div>
      <SongList handleNotes={handleNotes} handleCompleted={handleCompleted} deleteSong={deleteSong} band={band} songs={songs} setSongs={setSongs}/>
      <Dashboard addSong={addSong} band={band} setBand={setBand} songs={songs} setSongs={setSongs} choices={choices} handleSearch={handleSearch}/>
    </div>
  );
};

export default App;