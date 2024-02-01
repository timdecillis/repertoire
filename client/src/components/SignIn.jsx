import React, { useState, useEffect } from "react";

import { getSongs } from '../lib.js';

const SignIn = ({
  setSignedIn,
  setSignInOpen,
  signInOpen,
  setAuthUser,
  authUser,
  setCreateOpen,
  setSongs
}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authUser !== null) {
      setSignInOpen(false);
      setSignedIn(true);
      songs = getSongs(authUser);
      setSongs(songs);
    }
  }, [authUser]);

  const handleSignIn = (e) => {
    e.preventDefault();
    setAuthUser(email);
  };

  const handleOpenCreate = () => {
    setCreateOpen(true);
  };

  return (
    <form onSubmit={handleSignIn} className="sign-in">
      <div className="inputs">
        <div className="first-input" htmlFor="email">Account Login</div>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input" id="email" type="text" name="email" />
        <input onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input" id="password" type="password" name="password" />
        <input style={{backgroundColor: 'darkcyan', color: 'whitesmoke', marginBottom: '.7em', borderStyle: 'solid', borderWidth: '.1em'}} className="input" type="submit" value="Log In" />
        <div style={{textAlign: "center", margin: 0, padding: 0, fontSize: '.7em'}} className="input">Not a member?</div>
        <span onClick={handleOpenCreate} className="input" style={{textAlign: 'center', textDecoration: "underline", fontSize: '.7em', cursor: 'pointer' }}>Create account</span>
      </div>
    </form>
  );
};

export default SignIn;
