import React, { useState } from "react";

import { getSongs } from "../../lib.js";
import Error from "../Error/Error.jsx";

const SignIn = ({
  setSignedIn,
  setSignInOpen,
  signInOpen,
  setAuthUser,
  authUser,
  setCreateOpen,
  setSongs,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [error, setError] = useState(null);
  const [userError, setUserError] = useState("");

  const errors = {
    email: "Please enter your email",
    password: "Please enter your password",
    noUser: "User not found!",
    wrongPassword: "Incorrect password!",
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email) {
      setErrorOpen(true);
      setError(errors.email);
      return;
    }
    if (!password) {
      setErrorOpen(true);
      setError(errors.password);
      return;
    }
    getSongs(email, password).then((response) => {
      if (response === "User not found") {
        setErrorOpen(true);
        setError(errors.noUser);
      } else if (response === "Incorrect password") {
        setErrorOpen(true);
        setError(errors.wrongPassword);
      } else {
        setSignInOpen(false);
        setSignedIn(true);
        setSongs(response.songs);
      }
    });
  };

  const handleOpenCreate = () => {
    setCreateOpen(true);
  };

  return (
    <form onSubmit={handleSignIn} className="sign-in">
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
        <span
          onClick={handleOpenCreate}
          className="input"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontSize: ".7em",
            cursor: "pointer",
          }}
        >
          Create account
        </span>
        {userError && <div style={{ textAlign: "center" }}>{userError}</div>}
      </div>
    </form>
  );
};

export default SignIn;
