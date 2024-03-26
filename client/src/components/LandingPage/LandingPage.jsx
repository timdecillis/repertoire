import React from "react";

import HomeButtons from "../HomeButtons/HomeButtons.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import CreateUser from "../CreateUser/CreateUser.jsx";

const LandingPage = ({
  setSignedIn,
  authUser,
  createOpen,
  oneOpen,
  setOneOpen,
  setSignInOpen,
  setCreateOpen,
  signInOpen,
  setAuthUser,
  setSongs
}) => {

  console.log('landing...why?');
  return (
    <div className="landing">
      {createOpen ? (
        <CreateUser
          setAuthUser={setAuthUser}
          setCreateOpen={setCreateOpen}
          createOpen={createOpen}
          setOneOpen={setOneOpen}
          setSignedIn={setSignedIn}
          setSignInOpen={setSignInOpen}
        />
      ) : (
        <SignIn
          authUser={authUser}
          setSongs={setSongs}
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
