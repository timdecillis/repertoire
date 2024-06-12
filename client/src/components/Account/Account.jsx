import React, { useState, useContext } from "react";

import { DataContext } from "../../context.js";
import { updateUser } from "../../lib.js";

const Account = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [feedback, setFeedback] = useState(null);
  const [inputOpen, setInputOpen] = useState(null);

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
      <button>Change email</button>
      <form name="email" onSubmit={handleSubmit}>
        <input name="email" value={inputs.email} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <h4>Change password</h4>
      <form name="password" onSubmit={handleSubmit}>
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      {feedback && <div>{feedback}</div>}
    </div>
  );
};

export default Account;
