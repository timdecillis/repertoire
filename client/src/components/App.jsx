import React from 'react';
import Dashboard from './Dashboard.jsx';

const App = () => {
  return (
    <div>
      <h1>Repertoire</h1>
      <div>
        <button>Sign In</button>
        <button>Create Account</button>
        <Dashboard />
      </div>
    </div>
  );
};

export default App;