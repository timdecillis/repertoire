import React, { useState } from 'react';

const Instrument = ({ instrument, setInstrument }) => {


  return (
    <div className="instrument">
      <div className="dash-option" >Instrument</div>
      <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="guitar"></input>
      <label className="radio-button" htmlFor="instrument">Guitar</label>
      <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="drums"></input>
      <label className="radio-button" htmlFor="instrument">Drums</label>
      <input onClick={(e) => setInstrument(e.target.value)} type="radio" name="instrument" value="piano"></input>
      <label className="radio-button" htmlFor="instrument">Piano</label>
    </div>
  );
};

export default Instrument;