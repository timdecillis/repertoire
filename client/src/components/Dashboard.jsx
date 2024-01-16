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
  setDashOpen,
}) => {
  const [instrument, setInstrument] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(false);

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
            <div className="radios">
              <input
                onClick={(e) => setInstrument(e.target.value)}
                type="radio"
                name="instrument"
                value="guitar"
                className="radio"
              ></input>
              <label className="radio-button" htmlFor="instrument">
                Guitar
              </label>
              <input
                onClick={(e) => setInstrument(e.target.value)}
                type="radio"
                name="instrument"
                value="drums"
                className="radio"
              ></input>
              <label className="radio-button" htmlFor="instrument">
                Drums
              </label>
              <input
                onClick={(e) => setInstrument(e.target.value)}
                type="radio"
                name="instrument"
                value="piano"
                className="radio"
              ></input>
              <label className="radio-button" htmlFor="instrument">
                Piano
              </label>
            </div>
          </div>

          <div className="difficulty">
            <div className="dash-option">Select Difficulty</div>
            <div className="radios">
              <input
                onClick={(e) => setDifficulty(e.target.value)}
                type="radio"
                name="difficulty"
                value="beginner"
                className="radio"
              ></input>
              <label className="radio-button" htmlFor="difficulty">
                Beginner
              </label>
              <input
                onClick={(e) => setDifficulty(e.target.value)}
                type="radio"
                name="difficulty"
                value="intermediate"
                className="radio"
              ></input>
              <label className="radio-button" htmlFor="difficulty">
                Intermediate
              </label>
              <input
                onClick={(e) => setDifficulty(e.target.value)}
                type="radio"
                name="difficulty"
                value="advanced"
                className="radio"
              ></input>
              <label className="radio-button" htmlFor="difficulty">
                Advanced
              </label>
            </div>
          </div>

          <div className="search">
            <input
              className="search-input"
              placeholder="Enter an artist or band"
              onChange={(e) => setBand(e.target.value)}
              value={band}
              onClick={(e) => (e.target.placeholder = "")}
            ></input>
            <input disabled={loading} className="find-button" type="submit" value="Find Songs!" />
          </div>
        </form>
        <button className="back-button" onClick={() => setDashOpen(false)}>Back</button>

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
