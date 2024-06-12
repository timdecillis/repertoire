import React, { useState, useContext } from "react";

import { DataContext } from "../../context.js";
import { updateUser } from "../../lib.js";

const Account = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [feedback, setFeedback] = useState(null);
  const [inputOpen, setInputOpen] = useState(null);

  const backButton = <button onClick={() => setInputOpen(null)}>Back</button>;

  const { user } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formType = e.target.name;
    updateUser(user, formType, inputs[formType]).then((response) => {
      if (response === 202) {
        setFeedback("Update successful!");
      } else {
        setFeedback("Error handling update");
      }
      setTimeout(() => {
        setFeedback(null);
      }, 1500);
    });
  };

  return (
    <div>
      <h2>Account Options</h2>
      {!inputOpen && (
        <>
          <button onClick={() => setInputOpen("email")}>Change email</button>
          <button onClick={() => setInputOpen("password")}>
            Change password
          </button>
        </>
      )}
      {inputOpen === "email" && (
        <>
          <form name="email" onSubmit={handleSubmit}>
            <input
              placeholder="enter new email"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
          {backButton}
        </>
      )}
      {inputOpen === "password" && (
        <>
          <form name="password" onSubmit={handleSubmit}>
            <input
              placeholder="enter new password"
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
            />
            <input type="submit" value="Submit" />
          </form>
          {backButton}
        </>
      )}
      {feedback && <div>{feedback}</div>}
    </div>
  );
};

export default Account;
