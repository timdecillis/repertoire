import React, { useState } from "react";

const Difficulty = ({ difficulty, setDifficulty }) => {
  return (
    <div className="difficulty">
      <div className="dash-option">Select Difficulty</div>
      <div className="radios">
        <input
          onClick={(e) => setDifficulty(e.target.value)}
          type="radio"
          name="difficulty"
          value="beginner"
          className="radio"
          defaultChecked
        ></input>
        <label className="radio-button" htmlFor="difficulty">
          Beginner
        </label>
        <input
          onClick={(e) => setDifficulty(e.target.value)}
          type="radio"
          name="difficulty"
          value="intermediate"
          className="radio"
        ></input>
        <label className="radio-button" htmlFor="difficulty">
          Intermediate
        </label>
        <input
          onClick={(e) => setDifficulty(e.target.value)}
          type="radio"
          name="difficulty"
          value="advanced"
          className="radio"
        ></input>
        <label className="radio-button" htmlFor="difficulty">
          Advanced
        </label>
      </div>
    </div>
  );
};

export default Difficulty;
