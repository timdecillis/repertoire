import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { addSong } from "../../lib.js";
import { DataContext } from "../../context.js";

const Choices = ({ setSongDuplicate, choices, setChoices, band }) => {
  const navigate = useNavigate();

  const { setSongs } = useContext(DataContext);

  const handleChoice = (choice) => {
    addSong(authUser, choice, band).then(({ data }) => {
      setChoices([]);
      if (data.length === songs.length) {
        setSongDuplicate(true);
        return setTimeout(() => {
          setSongDuplicate(false);
          navigate(-1);
        }, 2000);
      }
      console.log("data:", data);
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
