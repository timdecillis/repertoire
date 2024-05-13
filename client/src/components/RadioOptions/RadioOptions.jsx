import { useState } from "react";

const RadioOptions = ({ setter, options, title }) => {
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
                name={title}
                value={value}
                className="radio"
                defaultChecked={i === 0}
              ></input>
              <label className="radio-button" htmlFor={title}>
                {value}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioOptions;
