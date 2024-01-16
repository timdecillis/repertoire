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
  setDashOpen
}) => {
  const [instrument, setInstrument] = useState("");
  const [difficulty, setDifficulty] = useState("");

  if (!signedIn) {
    return null;
  }

  return (
    <>
      <div className="dashboard">
        <div className="add-song">Find a song</div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(band, instrument, difficulty);
          }}
        >
          <div className="instrument">
            <div className="dash-option">Select Instrument</div>
            <input
              onClick={(e) => setInstrument(e.target.value)}
              type="radio"
              name="instrument"
              value="guitar"
            ></input>
            <label className="radio-button" htmlFor="instrument">
              Guitar
            </label>
            <input
              onClick={(e) => setInstrument(e.target.value)}
              type="radio"
              name="instrument"
              value="drums"
            ></input>
            <label className="radio-button" htmlFor="instrument">
              Drums
            </label>
            <input
              onClick={(e) => setInstrument(e.target.value)}
              type="radio"
              name="instrument"
              value="piano"
            ></input>
            <label className="radio-button" htmlFor="instrument">
              Piano
            </label>
          </div>

          <div className="difficulty">
            <div className="dash-option">Select Difficulty</div>
            <input
              onClick={(e) => setDifficulty(e.target.value)}
              type="radio"
              name="difficulty"
              value="beginner"
            ></input>
            <label className="radio-button" htmlFor="difficulty">
              Beginner
            </label>
            <input
              onClick={(e) => setDifficulty(e.target.value)}
              type="radio"
              name="difficulty"
              value="intermediate"
            ></input>
            <label className="radio-button" htmlFor="difficulty">
              Intermediate
            </label>
            <input
              onClick={(e) => setDifficulty(e.target.value)}
              type="radio"
              name="difficulty"
              value="advanced"
            ></input>
            <label className="radio-button" htmlFor="difficulty">
              Advanced
            </label>
          </div>

          <div className="search">
            <input
              className="input"
              placeholder="Enter an artist or band"
              onChange={(e) => setBand(e.target.value)}
            ></input>
          </div>
          <input className="notes-button" type="submit" value="Find Songs!" />
        </form>
        <button onClick={() => setDashOpen(false)}>Back</button>

        {/* <Instrument instrument={instrument} setInstrument={setInstrument}></Instrument>

      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />

      <Search band={band} setBand={setBand} instrument={instrument} difficulty={difficulty} handleSearch={handleSearch} /> */}

        <Choices
          choices={choices}
          addSong={addSong}
          band={band}
          authUser={authUser}
        />
      </div>
    </>
  );
};

export default Dashboard;
