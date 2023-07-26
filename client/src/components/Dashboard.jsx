import React, {useState} from 'react';

const Dashboard = ({handleSubmit, setBand}) => {

  return (
    <div>
      <input placeholder="Enter an artist or band" onChange={e => setBand(e.target.value)}></input>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Dashboard;