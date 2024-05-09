import React, { useState, useContext } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import Instrument from "../Instrument/Instrument.jsx";
import Difficulty from "../Difficulty/Difficulty.jsx";
import Search from "../Search/Search.jsx";
import Choices from "../Choices/Choices.jsx";
import Error from "../Error/Error.jsx";
import { searchSongs, getSongs } from "../../lib.js";
import { DataContext } from "../../index.js";

export const loader = async ({ params }) => {
  const user = params.email;
  const password = params.password;
  const data = await getSongs(params.email, params.password);
  const songs = data.data.songs;
  return { songs, user, password };
};

const Dashboard = ({ signedIn, setDashOpen }) => {
  const [instrument, setInstrument] = useState("guitar");
  const [difficulty, setDifficulty] = useState("beginner");
  const [currentBand, setCurrentBand] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, songs, password } = useLoaderData();

  const { dupe, setDupe} = useContext(DataContext);

  const handleSearch = (currentBand, instrument, difficulty) => {
    if (!currentBand) {
      setErrorOpen(true);
      return setTimeout(() => {
        setErrorOpen(false);
      }, 1500);
    }

    setLoading(true);
    searchSongs(currentBand, instrument, difficulty).then(({ data }) => {
      if (data.songs[0] === "song 1") {
        setLoading(false);
        setChoices(["Your search did not match any results :("]);
      } else {
        setChoices(data.songs);
        setCurrentBand(data.artist);
        setLoading(false);
      }
    });
  };

  const navigate = useNavigate();

  console.log("dupr:", dupe);

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

        {loading ? (
          <div>Please wait a moment...</div>
        ) : (
          <Choices
            songs={songs}
            setSongDuplicate={dupe}
            setChoices={setChoices}
            choices={choices}
            band={currentBand}
            authUser={user}
            password={password}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
