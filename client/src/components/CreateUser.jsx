import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';
const axios = require('axios');

const CreateUser = ({ setAuthUser, setSignedIn, createOpen, setCreateOpen }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!createOpen) {
    return null;
  }

  return (
    <div className="sign-in" >
      <div className="inputs">
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="input" placeholder="email"></input>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="password"></input>
      </div>
      <button className="sign-in-button" onClick={
        () => {
          return axios.post('/users', {email: email, password: password})
          // createUserWithEmailAndPassword(auth, email, password)
          //   .then((userCredential) => console.log(userCredential))
            .then(() => setCreateOpen(false))
            .then(() => setSignedIn(true))
            .then(() => setAuthUser(email))
            .catch(err => console.log(err));
        }}>Submit</button>
    </div>
  );

};

export default CreateUser;