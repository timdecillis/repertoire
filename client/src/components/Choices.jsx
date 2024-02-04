import React, { useState } from "react";

import { addSong, getSongs } from "../lib.js";

const Choices = ({ choices, setSongs, authUser, band, setDashOpen }) => {
  return (
    <div className="choices">
      {choices.length > 0 && (
        <div>
          {choices.map((choice, i) => (
            <div
              className="choice"
              onClick={() => {
                addSong(authUser, choice, band).then(({ data }) => {
                  setDashOpen(false);
                  setSongs(data);
                });
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
