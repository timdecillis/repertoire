import { useState } from "react";

const Instrument = ({ instrument, setInstrument }) => {
  return (
    <div className="instrument">
      <div className="dash-option">Instrument</div>
      <div className="radios">
        <input
          onClick={(e) => setInstrument(e.target.value)}
          type="radio"
          name="instrument"
          value="guitar"
          className="radio"
          defaultChecked
        ></input>
        <label className="radio-button" htmlFor="instrument">
          Guitar
        </label>
        <input
          onClick={(e) => setInstrument(e.target.value)}
          type="radio"
          name="instrument"
          value="drums"
          className="radio"
        ></input>
        <label className="radio-button" htmlFor="instrument">
          Drums
        </label>
        <input
          onClick={(e) => setInstrument(e.target.value)}
          type="radio"
          name="instrument"
          value="piano"
          className="radio"
        ></input>
        <label className="radio-button" htmlFor="instrument">
          Piano
        </label>
      </div>
    </div>
  );
};

export default Instrument;
