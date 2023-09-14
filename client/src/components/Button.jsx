import React, { useState } from 'react';

import store from '../redux/store.js';

const Button = ({ setSignedIn, setCreateOpen, setAuthUser }) => {

  return (
    <div>
      <button className="sign-in-button" onClick={
        () => {
          return axios.post('/users', { email: email, password: password })
            .then(() => setCreateOpen(false))
            .then(() => setSignedIn(true))
            .then(() => setAuthUser(email))
            .catch(err => console.log(err));
        }}>Submit</button>
    </div>
  );
};

export default Button;