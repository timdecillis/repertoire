import React, { useState } from "react";

const Choices = ({ choices, addSong, authUser, band, setDashOpen }) => {
  return (
    <div className="choices">
      {choices.length > 0 && (
        <div>
          {choices.map((choice, i) => (
            <div
              className="choice"
              onClick={() => {
                addSong(authUser, choice, band);
                setDashOpen(false);
              }}
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
