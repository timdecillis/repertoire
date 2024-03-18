import React, { useState } from "react";
import { createUser } from '../../lib.js';

import Button from "../Button/Button.jsx";

const CreateUser = ({
  setAuthUser,
  setSignedIn,
  createOpen,
  setCreateOpen,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [first, setFirst] = useState("");
  // const [last, setLast] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password);
  };

  const handleBack = () => {
    setCreateOpen(false);
  };

  return (
    <form onSubmit={handleSubmit} className="sign-in">
      <div className="inputs">
        <div className="first-input" htmlFor="email">Create Account</div>
        {/* <input onChange={(e) => setFirst(e.target.value)} placeholder="first name" className="input" id="firstName" type="text" name="firstName" />
        <input onChange={(e) => setLast(e.target.value)} placeholder="last name" className="input" id="lastName" type="text" name="lastName" /> */}
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input" id="email" type="text" name="email" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input" id="password" type="password" name="password" />
        <input style={{borderStyle: 'solid', borderWidth: '.1em', backgroundColor: 'darkcyan', color: 'whitesmoke', marginBottom: '.7em'}} className="input" type="submit" value="Submit" />
        <span onClick={handleBack} className="input" style={{textAlign: 'center', textDecoration: "underline", fontSize: '.7em', cursor: 'pointer' }}>Back to Log In</span>
      </div>
    </form>
  );
};

export default CreateUser;
