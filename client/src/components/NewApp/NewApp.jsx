import { Outlet, Link } from "react-router-dom";

const NewApp = () => {
  return (
    <div className="container">
      <div className="landing">
        <div className="banner">
          <div className="header">Repertoire</div>
          <Link
            to={"account"}
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
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default NewApp;
