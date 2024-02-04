import React, { useState } from "react";

import Instrument from "./Instrument.jsx";
import Difficulty from "./Difficulty.jsx";
import Search from "./Search.jsx";
import Choices from "./Choices.jsx";

const Dashboard = ({
  loading,
  setChoices,
  setLoading,
  handleSearch,
  choices,
  songs,
  setSongs,
  band,
  setBand,
  signedIn,
  authUser,
  setDashOpen,
  errorOpen,
}) => {
  const [instrument, setInstrument] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [currentBand, setCurrentBand] = useState("");

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
            handleSearch(currentBand, instrument, difficulty);
            setCurrentBand("");
          }}
        >
          <Instrument
            instrument={instrument}
            setInstrument={setInstrument}
          ></Instrument>

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
              onChange={(e) => setCurrentBand(e.target.value)}
              onClick={(e) => (e.target.placeholder = "")}
            ></input>
            <input
              value={currentBand}
              disabled={loading}
              className="find-button"
              type="submit"
              value="Search"
            />
          </div>
        </form>
        <button className="back-button" onClick={() => setDashOpen(false)}>
          Back
        </button>

        {/* <Instrument instrument={instrument} setInstrument={setInstrument}></Instrument>

      <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />

      <Search band={band} setBand={setBand} instrument={instrument} difficulty={difficulty} handleSearch={handleSearch} /> */}

        {loading ? (
          <div>Please wait a moment...</div>
        ) : errorOpen ? (
          <div>Please enter a band or artist</div>
        ) : (
          <Choices
            setChoices={setChoices}
            choices={choices}
            setSongs={setSongs}
            band={band}
            authUser={authUser}
            setDashOpen={setDashOpen}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
