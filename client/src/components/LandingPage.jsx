import React from "react";

import HomeButtons from "./HomeButtons.jsx";
import SignIn from "./SignIn.jsx";
import CreateUser from "./CreateUser.jsx";

const LandingPage = ({
  setSignedIn,
  getSongs,
  authUser,
  createOpen,
  oneOpen,
  setOneOpen,
  setSignInOpen,
  setCreateOpen,
  signInOpen,
  setAuthUser,
}) => {
  return (
    <div className="landing">
      {createOpen ? (
        <CreateUser
          setAuthUser={setAuthUser}
          setCreateOpen={setCreateOpen}
          createOpen={createOpen}
          setOneOpen={setOneOpen}
          setSignedIn={setSignedIn}
        />
      ) : (
        <SignIn
          authUser={authUser}
          getSongs={getSongs}
          setAuthUser={setAuthUser}
          setSignedIn={setSignedIn}
          signInOpen={signInOpen}
          setSignInOpen={setSignInOpen}
          setCreateOpen={setCreateOpen}
        />
      )}

      <img
        className="painting"
        src="https://media.istockphoto.com/id/1220009855/vector/a-young-man-playing-guitar-at-home-guitarist-musician-is-sitting-in-quarantine-alone-flat.jpg?s=612x612&w=0&k=20&c=p9bINE_TxSd4G4VRkvaHffh5vZjUdVUQvXGcqBlDrSs="
        alt="a man playing guitar with his cat"
      ></img>
    </div>
  );
};

export default LandingPage;
