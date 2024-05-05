import React from "react";
import { Outlet } from "react-router-dom";

const NewApp = () => {
  return (
    <div className="container">
      <div className="landing">
        <div className="banner">
          <div className="header">Repertoire</div>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default NewApp;
