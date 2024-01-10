import React, { useState, useEffect } from "react";

const SignIn = ({
  setSignedIn,
  setEmail,
  setSignInOpen,
  setPassword,
  signInOpen,
  setAuthUser,
  email,
  password,
  getSongs,
  authUser,
}) => {
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
    // <div className="sign-in" >
    //   <div className="inputs">
    //     <input onChange={(e) => setEmail(e.target.value)} type="email" className="input" placeholder="email"></input>
    //     <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="password"></input>
    //   </div>
    //   <button className="sign-in-button" onClick={handleSignIn}>Submit</button>
    // </div>
    <form className="sign-in">
      <div className="inputs">
        <label className="input" htmlFor="email">Please enter your email</label>
        <input onChange={(e) => setEmail(e.target.value)} className="input" id="email" type="text" name="email" />
        <label className="input" htmlFor="password">Please enter your password</label>
        <input onChange={(e) => setPassword(e.target.value)} className="input" id="password" type="text" name="password" />
        <input className="input" type="submit" value="login" />
      </div>
    </form>
  );
};

export default SignIn;
