import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import RadioOptions from "../RadioOptions/RadioOptions.jsx";
import Difficulty from "../Difficulty/Difficulty.jsx";
import Search from "../Search/Search.jsx";
import Choices from "../Choices/Choices.jsx";
import Error from "../Error/Error.jsx";
import { searchSongs } from "../../lib.js";
import { DataContext } from "../../context.js";

const Dashboard = () => {
  const [instrument, setInstrument] = useState("Guitar");
  const [difficulty, setDifficulty] = useState("Beginner");
  const [currentBand, setCurrentBand] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(false);

  const { dupe, setDupe, user, songs, password} = useContext(DataContext);

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
          <RadioOptions title="Instrument" options={["Guitar", "Drums", "Piano"]} setter={setInstrument} />
          <RadioOptions title="Difficulty" options={["Beginner", "Intermediate", "Advanced"]} setter={setDifficulty} />

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
            setSongDuplicate={setDupe}
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
