import HomeButtons from "../HomeButtons/HomeButtons.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import CreateUser from "../CreateUser/CreateUser.jsx";

const LandingPage = ({
  setSignedIn,
  authUser,
  createOpen,
  oneOpen,
  setOneOpen,
  setSignInOpen,
  setCreateOpen,
  signInOpen,
  setAuthUser,
  setSongs,
}) => {
  return (
    <div className="landing">
      {createOpen ? (
        <CreateUser
          setAuthUser={setAuthUser}
          setCreateOpen={setCreateOpen}
          createOpen={createOpen}
          setOneOpen={setOneOpen}
          setSignedIn={setSignedIn}
          setSignInOpen={setSignInOpen}
        />
      ) : (
        <SignIn
          authUser={authUser}
          setSongs={setSongs}
          setAuthUser={setAuthUser}
          setSignedIn={setSignedIn}
          signInOpen={signInOpen}
          setSignInOpen={setSignInOpen}
          setCreateOpen={setCreateOpen}
        />
      )}
    </div>
  );
};

export default LandingPage;
