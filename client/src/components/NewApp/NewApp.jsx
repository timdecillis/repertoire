import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "../SignIn/SignIn.jsx";

const NewApp = () => {
  return (
    <div className="container">
      <div className="landing">
        <div className="banner">
          <div className="header">Repertoire</div>
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default NewApp;
