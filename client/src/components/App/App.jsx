import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard.jsx";
import SongList from "../SongList/SongList.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import CreateUser from "../CreateUser/CreateUser.jsx";
import HomeButtons from "../HomeButtons/HomeButtons.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";
import Account from "../Account/Account.jsx";
import { searchSongs } from "../../lib.js";

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
  const [errorOpen, setErrorOpen] = useState(false);
  const [songDuplicate, setSongDuplicate] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  const userSignOut = () => {
    setAuthUser(null);
    setOneOpen(true);
    setSignedIn(false);
    setChoices([]);
  };

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

  const handleSignOut = () => {
    setSignedIn(false);
    setAuthUser(null);
    setSongs([]);
  };

  const handleAccount = () => {
    setAccountOpen(true);
    setDashOpen(false);
  };

  return (
    <div className="container">


      <LandingPage
        setSignedIn={setSignedIn}
        email={email}
        setSongs={setSongs}
        setAuthUser={setAuthUser}
        authUser={authUser}
        signInOpen={signInOpen}
        oneOpen={oneOpen}
        setOneOpen={setOneOpen}
        setSignInOpen={setSignInOpen}
        createOpen={createOpen}
        setCreateOpen={setCreateOpen}
      />

      {/* {!signedIn && (
        <LandingPage
          setSignedIn={setSignedIn}
          email={email}
          setSongs={setSongs}
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
          setSongDuplicate={setSongDuplicate}
          errorOpen={errorOpen}
          handleSearch={handleSearch}
          choices={choices}
          setChoices={setChoices}
          songs={songs}
          setSongs={setSongs}
          band={band}
          setBand={setBand}
          signedIn={signedIn}
          authUser={authUser}
          setDashOpen={setDashOpen}
          loading={loading}
          setLoading={setLoading}
        />
      ) : signedIn ? (
        <SongList
          songDuplicate={songDuplicate}
          authUser={authUser}
          signedIn={signedIn}
          band={band}
          songs={songs}
          setSongs={setSongs}
          dashOpen={dashOpen}
          setDashOpen={setDashOpen}
        />
      ) : accountOpen ? (
        <Account />
      ) : null} */}
    </div>
  );
};

export default App;
