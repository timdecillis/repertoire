import React, { useState } from 'react';

const HomeButtons = ({ setSignInOpen, setCreateOpen, setOneOpen, oneOpen }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!oneOpen) {
    return null;
  }
  return (
    <div className="button-container">
      <button onClick={() => {
        setOneOpen(false);
        setSignInOpen(true);
      }} className="user-button">Sign In</button>
      <button onClick={() => {
        setOneOpen(false);
        setCreateOpen(true);
      }} className="user-button">Create Account</button>
    </div>
  );
};

export default HomeButtons;