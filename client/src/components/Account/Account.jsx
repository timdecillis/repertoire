import React, { useState, useContext } from "react";

import { DataContext } from "../../context.js";
import { updateUser } from "../../lib.js";

const Account = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [feedback, setFeedback] = useState(null);
  const [inputOpen, setInputOpen] = useState(null);

  const backButton = <button onClick={() => setInputOpen(null)}>Back</button>;

  const changeForm = (type) => {
    return (
      <>
        <form name={type} onSubmit={handleSubmit}>
          <input
            type={type === "password" ? "password" : "text"}
            placeholder={`enter new ${type}`}
            name={type}
            value={inputs[type]}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        {backButton}
      </>
    );
  };

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
      {inputOpen === "email" && changeForm("email")}
      {inputOpen === "password" && changeForm("password")}
      {feedback && <div>{feedback}</div>}
    </div>
  );
};

export default Account;
