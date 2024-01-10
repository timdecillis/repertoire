import React, { useState } from "react";

import Instrument from "./Instrument.jsx";
import Difficulty from "./Difficulty.jsx";
import Search from "./Search.jsx";
import Choices from "./Choices.jsx";

const Dashboard = ({
  handleSearch,
  choices,
  songs,
  setSongs,
  band,
  setBand,
  addSong,
  signedIn,
  authUser,
}) => {
  const [instrument, setInstrument] = useState("");
  const [difficulty, setDifficulty] = useState("");

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
    <div className="instrument">
      <div className="dash-option" >Instrument</div>
      <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="guitar"></input>
      <label className="radio-button" htmlFor="instrument">Guitar</label>
      <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="drums"></input>
      <label className="radio-button" htmlFor="instrument">Drums</label>
      <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="piano"></input>
      <label className="radio-button" htmlFor="instrument">Piano</label>
    </div>
    <form onSubmit={handleSearch} className="sign-in">
      <div className="inputs">
        <label className="input" htmlFor="email">
          Please enter your email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          id="email"
          type="text"
          name="email"
        />
        <label className="input" htmlFor="password">
          Please enter your password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          id="password"
          type="text"
          name="password"
        />
        <input className="input" type="submit" value="Search" />
      </div>
    </form>
  );
};

export default Dashboard;
