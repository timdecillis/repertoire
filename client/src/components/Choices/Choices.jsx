import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addSong } from "../../lib.js";

const Choices = ({
  songs,
  setSongDuplicate,
  choices,
  setChoices,
  authUser,
  band,
  password
}) => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    addSong(authUser, choice, band).then(({ data }) => {
      setChoices([]);
      console.log("datalength:", data.length, 'songlength:', songs.length);
      if (data.length === songs.length) {
        setSongDuplicate(true);
        return setTimeout(() => {
          setSongDuplicate(false);
        }, 2000);
      }
      navigate(`/home/${authUser}/${password}`);
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
