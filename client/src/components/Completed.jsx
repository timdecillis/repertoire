import React, { useState } from 'react';

const Completed = ({ handleCompleted, authUser, song }) => {

  return (
    <div className="completed">
      <input onClick={() =>
        handleCompleted(authUser, song.name, song.artist)
      } type="checkbox" name="completed" defaultChecked={song.completed}></input>
      <label htmlFor="completed">Completed</label>
    </div>
  );
};

export default Completed;