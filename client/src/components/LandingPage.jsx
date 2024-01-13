import React from "react";

import HomeButtons from "./HomeButtons.jsx";
import SignIn from './SignIn.jsx';
import CreateUser from './CreateUser.jsx';

const LandingPage = ({
  email,
  getSongs,
  authUser,
  createOpen,
  oneOpen,
  setOneOpen,
  setSignInOpen,
  setCreateOpen,
  signInOpen,
}) => {
  return (
    <div className="landing">
      <img
        className="painting"
        src="https://media.istockphoto.com/id/1220009855/vector/a-young-man-playing-guitar-at-home-guitarist-musician-is-sitting-in-quarantine-alone-flat.jpg?s=612x612&w=0&k=20&c=p9bINE_TxSd4G4VRkvaHffh5vZjUdVUQvXGcqBlDrSs="
        alt="a man playing guitar with his cat"
      ></img>
      {createOpen ? (
        <CreateUser
          setAuthUser={setAuthUser}
          setCreateOpen={setCreateOpen}
          createOpen={createOpen}
          setOneOpen={setOneOpen}
          setSignedIn={setSignedIn}
        />
      ) : signInOpen ? (
        <SignIn
          authUser={authUser}
          getSongs={getSongs}
          email={email}
          password={password}
          setAuthUser={setAuthUser}
          setSignedIn={setSignedIn}
          setEmail={setEmail}
          setPassword={setPassword}
          signInOpen={signInOpen}
          setSignInOpen={setSignInOpen}
        />
      ) : (
        <HomeButtons
          oneOpen={oneOpen}
          setOneOpen={setOneOpen}
          setSignInOpen={setSignInOpen}
          setCreateOpen={setCreateOpen}
        />
      )}
    </div>
  );
};

export default LandingPage;
