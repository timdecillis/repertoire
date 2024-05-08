import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Instrument from "../Instrument/Instrument.jsx";
import Difficulty from "../Difficulty/Difficulty.jsx";
import Search from "../Search/Search.jsx";
import Choices from "../Choices/Choices.jsx";
import Error from "../Error/Error.jsx";
import { searchSongs } from "../../lib.js";

const Dashboard = ({
  setSongDuplicate,
  loading,
  setChoices,
  setLoading,
  choices,
  songs,
  setSongs,
  band,
  setBand,
  signedIn,
  authUser,
  setDashOpen,
}) => {
  const [instrument, setInstrument] = useState("guitar");
  const [difficulty, setDifficulty] = useState("beginner");
  const [currentBand, setCurrentBand] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);

  const handleSearch = (band, instrument, difficulty) => {
    if (!band) {
      setErrorOpen(true);
      return setTimeout(() => {
        setErrorOpen(false);
      }, 1500);
    }

    setLoading(true);
    searchSongs(band, instrument, difficulty).then(({ data }) => {
      if (data.songs[0] === "song 1") {
        setLoading(false);
        setChoices(["Your search did not match any results :("]);
      } else {
        setChoices(data.songs);
        setBand(data.artist);
        setLoading(false);
      }
    });
  };

  const navigate = useNavigate();

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
        {errorOpen && <Error error="Please enter a band or artist" />}
        <button className="back-button" onClick={() => navigate(-1)}>
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
