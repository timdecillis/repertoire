import React, { useState } from "react";
const axios = require("axios");

import Button from "./Button.jsx";

const CreateUser = ({
  setAuthUser,
  setSignedIn,
  createOpen,
  setCreateOpen,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return axios
      .post("/users", { email: email, password: password })
      .then(() => setCreateOpen(false))
      .then(() => setSignedIn(true))
      .then(() => setAuthUser(email))
      .then(() => setSignInOpen(false))
      .catch((err) => console.log(err));
  };

  return (
    // <form onSubmit={handleSubmit} className="sign-in">
    //   <div className="inputs">
    //     <input
    //       type="text"
    //       onChange={(e) => setEmail(e.target.value)}
    //       type="email"
    //       className="input"
    //       placeholder="email"
    //     />
    //     <input
    //       type="text"
    //       onChange={(e) => setPassword(e.target.value)}
    //       type="password"
    //       className="input"
    //       placeholder="password"
    //     />
    //   </div>
    //   <input className="sign-in-button" type="submit" value="submit" />
    // </form>
    <form onSubmit={handleSubmit} className="sign-in">
      <div className="inputs">
        <div className="first-input" htmlFor="email">Create Account</div>
        <input onChange={(e) => setFirst(e.target.value)} placeholder="first name" className="input" id="firstName" type="text" name="firstName" />
        <input onChange={(e) => setLast(e.target.value)} placeholder="last name" className="input" id="lastName" type="text" name="lastName" />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input" id="email" type="text" name="email" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input" id="password" type="password" name="password" />
        <input style={{backgroundColor: 'darkcyan', color: 'whitesmoke', marginBottom: '2em'}} className="input" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default CreateUser;
