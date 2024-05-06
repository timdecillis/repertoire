import React, { useState } from "react";

import Instrument from "../Instrument/Instrument.jsx";
import Difficulty from "../Difficulty/Difficulty.jsx";
import Search from "../Search/Search.jsx";
import Choices from "../Choices/Choices.jsx";

const Dashboard = ({
  setSongDuplicate,
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
          <Instrument instrument={instrument} setInstrument={setInstrument} />

          <Difficulty difficulty={difficulty} setDifficulty={setDifficulty} />

          <Search
            loading={loading}
            currentBand={currentBand}
            setCurrentBand={setCurrentBand}
          />
        </form>
        <button className="back-button" onClick={() => setDashOpen(false)}>
          Back
        </button>

        {/*
         */}

        {/* {loading ? (
          <div>Please wait a moment...</div>
        ) : errorOpen ? (
          <div>Please enter a band or artist</div>
        ) : (
          <Choices
            songs={songs}
            setSongDuplicate={setSongDuplicate}
            setChoices={setChoices}
            choices={choices}
            setSongs={setSongs}
            band={band}
            authUser={authUser}
            setDashOpen={setDashOpen}
          />
        )} */}
      </div>
    </>
  );
};

export default Dashboard;
