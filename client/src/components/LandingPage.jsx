import React from 'react';

import HomeButtons from './HomeButtons.jsx';

const LandingPage = ({ createOpen, oneOpen, setOneOpen, setSignInOpen, setCreateOpen, signInOpen }) => {

  if (signInOpen) {
    return null;
  }

  return (
    <div className="landing">
      <img className="painting" src="https://media.istockphoto.com/id/1220009855/vector/a-young-man-playing-guitar-at-home-guitarist-musician-is-sitting-in-quarantine-alone-flat.jpg?s=612x612&w=0&k=20&c=p9bINE_TxSd4G4VRkvaHffh5vZjUdVUQvXGcqBlDrSs=" alt="a man playing guitar with his cat"></img>
      <HomeButtons oneOpen={oneOpen} setOneOpen={setOneOpen} setSignInOpen={setSignInOpen} setCreateOpen={setCreateOpen} />
    </div>
  );
};

export default LandingPage;