import React, { useState } from 'react';

import Button from './Button.jsx';

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
      <Button setCreateOpen={setCreateOpen} setSignedIn={setSignedIn} setAuthUser={setAuthUser} email={email} password={password} />
    </div>
  );
};

export default CreateUser;