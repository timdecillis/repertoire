import React, { useState } from "react";

const Account = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setInput] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log(emailInput);
  };
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log(passwordInput);
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
      <form onSubmit={handleEmailSubmit}>
        <input onChange={(e) => setEmailInput(e.target.value)} />
        <input type="submit" value="foo" />
      </form>
    </div>
  );
};

export default Account;
