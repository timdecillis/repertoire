import React, { useState } from 'react';

const RemoveButton = ({ deleteSong, authUser, song }) => {

  return (
    <button className="remove-song" onClick={() => {
      deleteSong(authUser, song.name, song.artist);
    }} >Remove song
    </button>
  );
};

export default RemoveButton;


