import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    addSong(authUser, choice, band).then(({ data }) => {
      console.log('data', data);
      setChoices([]);
      if (data.length === songs.length) {
        setSongDuplicate(true);
        return setTimeout(() => {
          setSongDuplicate(false);
        }, 2000);
      }
      setSongs(data);
      navigate(-1);
    });
  };

  return (
    <div className="choices">
      {choices.length > 0 && (
        <div>
          {choices.map((choice, i) => (
            <div
              className="choice"
              onClick={() => handleChoice(choice)}
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
