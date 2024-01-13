import React, { useState } from 'react';

import Button from './Button.jsx';

const CreateUser = ({ setAuthUser, setSignedIn, createOpen, setCreateOpen }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

  };

  return (
    <form onSubmit={handleSubmit} className="sign-in" >
      <div className="inputs">
        <input type="text" onChange={(e) => setEmail(e.target.value)} type="email" className="input" placeholder="email"/>
        <input type="text" onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="password"/>
      </div>
      <input type="submit"/>
      <Button setCreateOpen={setCreateOpen} setSignedIn={setSignedIn} setAuthUser={setAuthUser} email={email} password={password} />
    </form>
  );
};

export default CreateUser;