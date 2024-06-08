import React, { useState } from "react";

const Account = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setInput] = useState("");
  return (
    <div>
      <h2>Account Options</h2>
      <h4>Change email</h4>
      <input onChange={(e) => setEmailInput(e.target.value)}/>
      <div>{emailInput}</div>
      <h4>Change password</h4>
      <div>{passwordInput}</div>
      <input/>
    </div>
  );
};

export default Account;
