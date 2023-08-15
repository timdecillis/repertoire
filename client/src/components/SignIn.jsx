import React, { useState, useEffect } from 'react';

const SignIn = ({ setSignedIn, setEmail, setSignInOpen, setPassword, signInOpen, setAuthUser, email, password, getSongs, authUser }) => {

  useEffect(() => {
    if (authUser !== null) {
      setSignInOpen(false);
      setSignedIn(true);
      getSongs();
    }
  }, [authUser]);


  if (!signInOpen) {
    return null;
  }

  const handleSignIn = () => {
    setAuthUser(email);
  };

  return (
    <div className="sign-in" >
      <div className="inputs">
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="input" placeholder="email"></input>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="password"></input>
      </div>
      <button className="sign-in-button" onClick={handleSignIn}>Submit</button>
    </div>
  );
};

export default SignIn;