import React, { useState, useContext } from "react";

import { DataContext } from "../../context.js";
import { updateUser } from "../../lib.js";

const Account = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const { user } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formType = e.target.name;
    updateUser(user, formType, inputs[formType]);
  };

  return (
    <div>
      <h2>Account Options</h2>
      <h4>Change email</h4>
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
    </div>
  );
};

export default Account;
