import React, { useState } from 'react';

const Difficulty = ({ difficulty, setDifficulty }) => {


  return (
    <div className="difficulty">
      <div className="dash-option">Difficulty</div>
      <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="beginner"></input>
      <label className="radio-button" htmlFor="difficulty">Beginner</label>
      <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="intermediate"></input>
      <label className="radio-button" htmlFor="difficulty">Intermediate</label>
      <input onClick={(e) => setDifficulty(e.target.value)} type="radio" name="difficulty" value="advanced"></input>
      <label className="radio-button" htmlFor="difficulty">Advanced</label>
    </div>
  );
};

export default Difficulty;