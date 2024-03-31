import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [error, setError] = useState(null);

  const errors = {
    email: "Please enter your email",
    password: "Please enter your password",
    noUser: "User not found!",
    wrongPassword: "Incorrect password!",
  };

  const handleError = (error) => {
    setErrorOpen(true);
    setError(error);
    setTimeout(() => {
      setErrorOpen(false);
    }, 1500);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email) {
      return handleError(errors.email);
    }
    if (!password) {
      return handleError(errors.password);
    }
    getSongs(email, password).then(({ data }) => {
      if (data === "User not found") return handleError(errors.noUser);
      if (data === "Incorrect password")
        return handleError(errors.wrongPassword);
      setAuthUser(email);
      setSignInOpen(false);
      setSignedIn(true);
      setSongs(data.songs);
      // history.push('/songlist');
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
      </div>
    </form>
  );
};

export default SignIn;
