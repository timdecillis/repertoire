import React, { useState } from "react";
import { createUser } from "../../lib.js";
import { Link } from "react-router-dom";

import Button from "../Button/Button.jsx";

const CreateUser = ({
  setAuthUser,
  setSignedIn,
  createOpen,
  setCreateOpen,
  setSignInOpen
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createErrorOpen, setCreateErrorOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password).then((res) => {
      if (res.status === 200) {
        setCreateErrorOpen(true);
        setTimeout(() => {
          setCreateErrorOpen(false);
        }, 1500);
        return;
      }
      setCreateOpen(false);
      setSignedIn(true);
      setAuthUser(email);
      setSignInOpen(false);
    });
  };

  const handleBack = () => {
    setCreateOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in">
      <div className="inputs">
        <div className="first-input" htmlFor="email">
          Create Account
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
            borderStyle: "solid",
            borderWidth: ".1em",
            backgroundColor: "darkcyan",
            color: "whitesmoke",
            marginBottom: ".7em",
          }}
          className="input"
          type="submit"
          value="Submit"
        />
        <Link
          // onClick={handleBack}
          to="signin"
          className="input"
          style={{
            textAlign: "center",
            textDecoration: "underline",
            fontSize: ".7em",
            cursor: "pointer",
          }}
        >
          Back to Log In
        </Link>
        {createErrorOpen && (
          <div style={{ textAlign: "center" }}>User already exists!</div>
        )}
      </div>
    </form>
  );
};

export default CreateUser;
