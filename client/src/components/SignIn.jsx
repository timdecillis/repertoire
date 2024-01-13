import React, { useState, useEffect } from "react";

const SignIn = ({
  setSignedIn,
  setSignInOpen,
  signInOpen,
  setAuthUser,
  getSongs,
  authUser,
}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSignIn = (e) => {
    e.preventDefault();
    setAuthUser(email);
  };

  return (
    <form onSubmit={handleSignIn} className="sign-in">
      <div className="inputs">
        <label className="input" htmlFor="email">Please enter your email</label>
        <input onChange={(e) => setEmail(e.target.value)} className="input" id="email" type="text" name="email" />
        <label className="input" htmlFor="password">Please enter your password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="input" id="password" type="password" name="password" />
        <input className="input" type="submit" value="login" />
      </div>
    </form>
  );
};

export default SignIn;
