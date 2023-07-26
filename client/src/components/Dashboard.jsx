import React, {useState} from 'react';
const axios = require('axios');

const Dashboard = () => {
  const [band, setBand] = useState('');
  const handleSubmit = () => {
    return axios.post('/findBand', {band: band})
      .then((res) => {
        console.log('response:', res);
      });
  };
  return (
    <div>
      <h2>Current Songs</h2>
      <div>Find new songs</div>
      <textarea onChange={e => setBand(e.target.value)}></textarea>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Dashboard;