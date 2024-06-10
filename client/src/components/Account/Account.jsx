import React, { useState, useContext } from "react";

import { DataContext } from "../../context.js";
import { updateUser } from "../../lib.js";

const Account = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const { user } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user, "email", emailInput);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    updateUser(user, "password", passwordInput);
  };
  return (
    <div>
      <h2>Account Options</h2>
      <h4>Change email</h4>
      <form onSubmit={handleEmailSubmit}>
        <input name="email" onChange={handleSubmit} />
        <input type="submit" value="Submit" />
      </form>
      <h4>Change password</h4>
      <form onSubmit={handlePasswordSubmit}>
        <input name="password" onChange={handleSubmit} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Account;
