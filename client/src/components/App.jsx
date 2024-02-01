import React, { useState } from "react";
import Dashboard from "./Dashboard.jsx";
import SongList from "./SongList.jsx";
const axios = require("axios");

import SignIn from "./SignIn.jsx";
import CreateUser from "./CreateUser.jsx";
import HomeButtons from "./HomeButtons.jsx";
import LandingPage from "./LandingPage.jsx";
import { getSongs } from '../lib.js';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [choices, setChoices] = useState([]);
  const [band, setBand] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oneOpen, setOneOpen] = useState(true);
  const [authUser, setAuthUser] = useState(null);
  const [dashOpen, setDashOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const userSignOut = () => {
    setAuthUser(null);
    setOneOpen(true);
    setSignedIn(false);
    setChoices([]);
  };

  // const getSongs = () => {
  //   return axios
  //     .get("/getSongs", { params: { email: authUser } })
  //     .then(({ data }) => {
  //       setSongs(data);
  //     });
  // };

  const handleSearch = (band, instrument, difficulty) => {
    setLoading(true);
    return axios
      .post("/findBand", {
        band: band,
        instrument: instrument,
        difficulty: difficulty,
      })
      .then(({ data }) => {
        if (data.songs[0] === "song 1") {
          setChoices(["Your search did not match any results :("]);
        } else {
          setChoices(data.songs);
          setBand(data.artist);
          setLoading(false);
        }
      });
  };

  const addSong = (authUser, song, band) => {
    return axios
      .post("/addSong", { email: authUser, song: song, artist: band })
      .then(() => {
        getSongs(authUser);
      })
      .then((songs) => setSongs(songs));
  };

  const deleteSong = (authUser, song, artist) => {
    return axios
      .delete("/deleteSong", {
        data: { email: authUser, song: song, artist: artist },
      })
      .then(() => {
        getSongs(authUser);
      })
      .then((songs) => setSongs(songs));
  };

  const handleCompleted = (authUser, song, artist) => {
    return axios
      .put("/updateSong", { email: authUser, song: song, artist: artist })
      .then(() => {
        getSongs(authUser);
      })
      .then((songs) => setSongs(songs));
  };
  const handleNotes = (authUser, song, artist, notes) => {
    return axios
      .put("/updateNotes", {
        email: authUser,
        song: song,
        artist: artist,
        notes: notes,
      })
      .then(() => {
        getSongs(authUser);
      })
      .then((songs) => setSongs(songs));
  };

  const handleSignOut = () => {
    setSignedIn(false);
    setAuthUser(null);
    setSongs([]);
  };

  return (
    <div className="container">
      <div className="banner">
        <div className="header">Repertoire</div>
        {signedIn && (
          <span onClick={handleSignOut} className="sign-out-button">
            Sign Out
          </span>
        )}
      </div>

      {!signedIn && (
        <LandingPage
          setSignedIn={setSignedIn}
          email={email}
          // getSongs={getSongs}
          setAuthUser={setAuthUser}
          authUser={authUser}
          signInOpen={signInOpen}
          oneOpen={oneOpen}
          setOneOpen={setOneOpen}
          setSignInOpen={setSignInOpen}
          createOpen={createOpen}
          setCreateOpen={setCreateOpen}
        />
      )}
      {dashOpen ? (
        <Dashboard
          handleSearch={handleSearch}
          choices={choices}
          songs={songs}
          setSongs={setSongs}
          band={band}
          setBand={setBand}
          addSong={addSong}
          signedIn={signedIn}
          authUser={authUser}
          setDashOpen={setDashOpen}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        signedIn && (
          <SongList
            authUser={authUser}
            signedIn={signedIn}
            handleNotes={handleNotes}
            handleCompleted={handleCompleted}
            deleteSong={deleteSong}
            band={band}
            songs={songs}
            setSongs={setSongs}
            dashOpen={dashOpen}
            setDashOpen={setDashOpen}
          />
        )
      )}
    </div>
  );
};

export default App;
