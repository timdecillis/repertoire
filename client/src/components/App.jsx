import React, { useState } from "react";
import Dashboard from "./Dashboard.jsx";
import SongList from "./SongList.jsx";
const axios = require("axios");

import SignIn from "./SignIn.jsx";
import CreateUser from "./CreateUser.jsx";
import HomeButtons from "./HomeButtons.jsx";
import LandingPage from "./LandingPage.jsx";

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

  const userSignOut = () => {
    setAuthUser(null);
    setOneOpen(true);
    setSignedIn(false);
    setChoices([]);
  };

  const getSongs = () => {
    return axios
      .get("/getSongs", { params: { email: authUser } })
      .then(({ data }) => {
        setSongs(data);
      });
  };

  const handleSearch = (band, instrument, difficulty) => {
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
        }
      });
  };

  const addSong = (authUser, song, band) => {
    return axios
      .post("/addSong", { email: authUser, song: song, artist: band })
      .then(() => {
        getSongs();
      });
  };

  const deleteSong = (authUser, song, artist) => {
    return axios
      .delete("/deleteSong", {
        data: { email: authUser, song: song, artist: artist },
      })
      .then(() => {
        getSongs();
      });
  };

  const handleCompleted = (authUser, song, artist) => {
    return axios
      .put("/updateSong", { email: authUser, song: song, artist: artist })
      .then(() => {
        getSongs();
      });
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
        getSongs();
      });
  };

  return (
    <div className="container">
      <div className="banner">
        <div className="header">Repertoire</div>
        {signedIn && <span className="sign-out-button">Sign Out</span>}
      </div>

      {!signedIn && (
        <LandingPage
          setSignedIn={setSignedIn}
          email={email}
          getSongs={getSongs}
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

      <div className="list-and-dash">
        <Dashboard
          signedIn={signedIn}
          addSong={addSong}
          band={band}
          authUser={authUser}
          setBand={setBand}
          songs={songs}
          setSongs={setSongs}
          choices={choices}
          handleSearch={handleSearch}
        />

        {songs.length > 0 && (
          <SongList
            authUser={authUser}
            signedIn={signedIn}
            handleNotes={handleNotes}
            handleCompleted={handleCompleted}
            deleteSong={deleteSong}
            band={band}
            songs={songs}
            setSongs={setSongs}
          />
        )}
      </div>
    </div>
  );
};

export default App;
