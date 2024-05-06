import React, { useState } from "react";
import { createUser } from "../../lib.js";
import { Link, useNavigate } from "react-router-dom";

import Button from "../Button/Button.jsx";

const CreateUser = ({ setAuthUser, setSignedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createErrorOpen, setCreateErrorOpen] = useState(false);
  const [error, setError] = useState(null);

  const errors = {
    email: "Please enter your email",
    password: "Please enter your password",
    existing: "User already exists!"
  };

  const navigate = useNavigate();

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
      setSignedIn(true);
      setAuthUser(email);
    });
  };

  return (
    <div>
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
            to="/"
            className="input"
            style={{
              textAlign: "center",
              textDecoration: "underline",
              fontSize: ".7em",
              cursor: "pointer",
              color: "black",
            }}
          >
            Back to Log In
          </Link>
          {createErrorOpen && (
            <div style={{ textAlign: "center" }}>User already exists!</div>
          )}
        </div>
      </form>
      <img
        className="painting"
        src="https://media.istockphoto.com/id/1220009855/vector/a-young-man-playing-guitar-at-home-guitarist-musician-is-sitting-in-quarantine-alone-flat.jpg?s=612x612&w=0&k=20&c=p9bINE_TxSd4G4VRkvaHffh5vZjUdVUQvXGcqBlDrSs="
        alt="a man playing guitar with his cat"
      ></img>
    </div>
  );
};

export default CreateUser;
