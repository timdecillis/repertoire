import { Outlet, Link } from "react-router-dom";

const NewApp = () => {
  return (
    <div className="container">
      <div className="landing">
        <div className="banner">
          <Link to={'account'}>Account</Link>
          <div className="header">Repertoire</div>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default NewApp;
