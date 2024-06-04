import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard.jsx";
import SongList from "../SongList/SongList.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import CreateUser from "../CreateUser/CreateUser.jsx";
import HomeButtons from "../HomeButtons/HomeButtons.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";
import Account from "../Account/Account.jsx";
import { searchSongs } from "../../lib.js";
import { Link, Outlet } from "react-router-dom";

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
      <div className="landing">
        <form className="sign-in">
          <div className="inputs">
            <div className="first-input" htmlFor="email">
              Account Login
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="input"
              id="email"
              type="text"
              name="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="input"
              id="password"
              type="password"
              name="password"
            />
            <input
              style={{
                backgroundColor: "darkcyan",
                color: "whitesmoke",
                marginBottom: ".7em",
                borderStyle: "solid",
                borderWidth: ".1em",
              }}
              className="input"
              type="submit"
              value="Log In"
            />
            {errorOpen && <Error error={error} />}

            <div
              style={{
                textAlign: "center",
                margin: 0,
                padding: 0,
                fontSize: ".7em",
              }}
              className="input"
            >
              Not a member?
            </div>
            <Link
              to={`create`}
              className="input"
              style={{
                textAlign: "center",
                textDecoration: "underline",
                fontSize: ".7em",
                cursor: "pointer",
                color: "black",
              }}
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default App;
