import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getSongs } from "../../lib.js";
import { DataContext } from "../../context.js";
import Error from "../Error/Error.jsx";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorOpen, setErrorOpen] = useState(false);
  const [error, setError] = useState(null);

  const { setUser, setUserPassword, setSongs } = useContext(DataContext);

  const navigate = useNavigate();

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
    }, 1400);
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
      setUser(email);
      setUserPassword(password);
      setSongs(data.songs);
      navigate("/home");
    });
  };

  return (
    <div>
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
            autoComplete="on"
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
            to="create"
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
      <img
        className="painting"
        src="https://media.istockphoto.com/id/1220009855/vector/a-young-man-playing-guitar-at-home-guitarist-musician-is-sitting-in-quarantine-alone-flat.jpg?s=612x612&w=0&k=20&c=p9bINE_TxSd4G4VRkvaHffh5vZjUdVUQvXGcqBlDrSs="
        alt="a man playing guitar with his cat"
      ></img>
    </div>
  );
};

export default SignIn;
