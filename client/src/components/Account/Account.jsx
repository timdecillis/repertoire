import React, { useState } from "react";

const Account = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setInput] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      <h2>Account Options</h2>
      <h4>Change email</h4>
      <form>
        <input onChange={(e) => setEmailInput(e.target.value)} />
        <input type="submit" />
      </form>
      <div>{emailInput}</div>
      <h4>Change password</h4>
      <div>{passwordInput}</div>
      <input />
    </div>
  );
};

export default Account;
