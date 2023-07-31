import React, { useState, useEffect } from 'react';

const SignIn = ({ setSignedIn, signInFunc, setEmail, setSignInOpen, setPassword, signInOpen, setAuthUser, email, password, getSongs, authUser }) => {

  useEffect(() => {
    if (authUser !== null) {
      // Perform any side effects or actions related to the updated authUser state here
      setSignInOpen(false);
      setSignedIn(true);
      getSongs();
    }
  }, [authUser]);


  if (!signInOpen) {
    return null;
  }



  const handleSignIn = () => {
    // Your authentication logic here...
    // Assuming you set the authUser state after successful authentication
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