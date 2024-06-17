import React, { useState, useContext } from "react";

import { DataContext } from "../../context.js";
import { updateUser } from "../../lib.js";
import BackButton from "./BackButton.jsx";
import ChangeForm from "./ChangeForm.jsx";

const Account = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [feedback, setFeedback] = useState(null);
  const [inputOpen, setInputOpen] = useState(null);

  const handleBack = () => setInputOpen(null);

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
      setInputOpen(null);
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
        <ChangeForm type="email" inputs={inputs} handler={handleSubmit} button={<BackButton handler={handleBack} />} />
      )}
      {inputOpen === "password" && (
        <ChangeForm type="password" inputs={inputs} handler={handleSubmit} button={<BackButton handler={handleBack} />} />
      )}

      {feedback && <div>{feedback}</div>}
    </div>
  );
};

export default Account;
