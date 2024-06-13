import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { DataContext } from "../../context.js"

const NewApp = () => {
  const { user } = useContext(DataContext);
  return (
    <div className="container">
      <div className="landing">
        <div className="banner">
          <div className="header">Repertoire</div>
          {user && (
            <Link
              to={"account"}
              className="input"
              style={{
                textAlign: "center",
                textDecoration: "underline",
                fontSize: ".7em",
                cursor: "pointer",
                color: "black",
              }}
            >
              Account
            </Link>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default NewApp;
