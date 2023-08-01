import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard.jsx';
import SongList from './SongList.jsx';
const axios = require('axios');

import SignIn from './SignIn.jsx';
import CreateUser from './CreateUser.jsx';
import HomeButtons from './HomeButtons.jsx';

import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.js';

const App = () => {

  const [songs, setSongs] = useState([]);
  const [choices, setChoices] = useState([]);
  const [band, setBand] = useState('');
  const [signedIn, setSignedIn] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [oneOpen, setOneOpen] = useState(true);
  const [authUser, setAuthUser] = useState(null);

  // useEffect(() => {
  //   const listen = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log(user);
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });
  //   return listen();
  // }, []);

  const userSignOut = () => {
    setAuthUser(null);
    setOneOpen(true);
    setSignedIn(false);
    setChoices([]);

  };


  // useEffect(() => {
  //   getSongs();
  // }, []);

  const getSongs = () => {
    return axios.get('/getSongs', { params: { email: authUser } })
      .then(({ data }) => {
        setSongs(data);
      });
  };

  const handleSearch = (band, instrument, difficulty) => {
    return axios.post('/findBand', { band: band, instrument: instrument, difficulty: difficulty })
      .then(({ data }) => {
        if (data.songs[0] === 'song 1') {
          setChoices(['Your search did not match any results :(']);
        } else {
          setChoices(data.songs);
          setBand(data.artist);
        }
      });
  };

  const addSong = (authUser, song, band) => {
    return axios.post('/addSong', { email: authUser, song: song, artist: band })
      .then(() => {
        getSongs();
      });
  };

  const deleteSong = (authUser, song, artist) => {
    return axios.delete('/deleteSong', { data: { email: authUser, song: song, artist: artist } })
      .then(() => {
        getSongs();
      });
  };

  const handleCompleted = (authUser, song, artist) => {
    return axios.put('/updateSong', { email: authUser, song: song, artist: artist })
      .then(() => {
        getSongs();
      });
  };
  const handleNotes = (authUser, song, artist, notes) => {
    return axios.put('/updateNotes', { email: authUser, song: song, artist: artist, notes: notes })
      .then(() => {
        getSongs();
      });
  };

  const signInFunc = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (

    <div className="container">
      <div className="banner">

        <div className="header">Repertoire</div>
      </div>
      {!signedIn ?
        <div className="landing">
          <img className="painting" src="https://media.istockphoto.com/id/1220009855/vector/a-young-man-playing-guitar-at-home-guitarist-musician-is-sitting-in-quarantine-alone-flat.jpg?s=612x612&w=0&k=20&c=p9bINE_TxSd4G4VRkvaHffh5vZjUdVUQvXGcqBlDrSs="></img>
          <HomeButtons oneOpen={oneOpen} setOneOpen={setOneOpen} setSignInOpen={setSignInOpen} setCreateOpen={setCreateOpen} />

        </div>
        :
        <button className="sign-in-button" onClick={userSignOut}>Sign Out</button>}

      <CreateUser setAuthUser={setAuthUser} setCreateOpen={setCreateOpen} createOpen={createOpen} setOneOpen={setOneOpen} setSignedIn={setSignedIn} />


      <SignIn authUser={authUser} getSongs={getSongs} email={email} password={password} setAuthUser={setAuthUser} setSignedIn={setSignedIn} setEmail={setEmail}
        setPassword={setPassword} signInOpen={signInOpen}
        setSignInOpen={setSignInOpen} signInFunc={signInFunc} />

      <div className="list-and-dash">

        <Dashboard signedIn={signedIn} addSong={addSong} band={band} authUser={authUser} setBand={setBand} songs={songs} setSongs={setSongs} choices={choices} handleSearch={handleSearch} />

        {songs.length > 0 && <SongList authUser={authUser} signedIn={signedIn} handleNotes={handleNotes} handleCompleted={handleCompleted} deleteSong={deleteSong} band={band} songs={songs} setSongs={setSongs} />}


      </div>



    </div>
  );
};

export default App;