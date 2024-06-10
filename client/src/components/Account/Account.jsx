import React, { useState, useContext } from "react";

import {DataContext} from "../../context.js";
import { updateUser } from "../../lib.js";

const Account = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    updateUser("email", emailInput);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    updateUser("password", passwordInput);
  };
  return (
    <div>
      <h2>Account Options</h2>
      <h4>Change email</h4>
      <form onSubmit={handleEmailSubmit}>
        <input onChange={(e) => setEmailInput(e.target.value)} />
        <input type="submit" value="foo" />
      </form>
      <h4>Change password</h4>
      <form onSubmit={handlePasswordSubmit}>
        <input onChange={(e) => setPasswordInput(e.target.value)} />
        <input type="submit" value="foo" />
      </form>
    </div>
  );
};

export default Account;
