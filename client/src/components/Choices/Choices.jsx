import React, { useState } from "react";

import { addSong } from "../../lib.js";

const Choices = ({
  songs,
  setSongDuplicate,
  choices,
  setChoices,
  setSongs,
  authUser,
  band,
}) => {

  const handleChoice = () => {
    addSong(authUser, choice, band).then(({ data }) => {
      setChoices([]);
      if (data.length === songs.length) {
        setSongDuplicate(true);
        return setTimeout(() => {
          setSongDuplicate(false);
        }, 2000);
      }
      setSongs(data);
    });
  };

  return (
    <div className="choices">
      {choices.length > 0 && (
        <div>
          {choices.map((choice, i) => (
            <div
              className="choice"
              onClick={handleChoice}
              key={i}
            >
              {choice}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Choices;
