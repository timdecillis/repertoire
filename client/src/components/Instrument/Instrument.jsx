import { useState } from "react";

const Instrument = ({ instrument, setter, options, title }) => {
  return (
    <div className="instrument">
      <div className="dash-option">Select {title}</div>
      <div className="radios">
        {options.map((value, i) => {
          return (
            <div key={i}>
              <input
                onClick={(e) => setter(e.target.value)}
                type="radio"
                name="instrument"
                value={value}
                className="radio"
                defaultChecked={i === 0}
              ></input>
              <label className="radio-button" htmlFor="instrument">
                {value}
              </label>
            </div>
          );
        })}
        {/* <input
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
        </label> */}
      </div>
    </div>
  );
};

export default Instrument;
