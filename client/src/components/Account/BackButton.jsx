export default BackButton = () => {
  const backButton = ({ handler }) => <button onClick={handler}>Back</button>;

  return (
    <div>
      <h2>Account Options</h2>
      {!inputOpen && (
        <>
          <button onClick={() => setInputOpen("email")}>Change email</button>
          <button onClick={() => setInputOpen("password")}>
            Change password
          </button>
        </>
      )}
      {inputOpen === "email" && changeForm("email", backButton)}
      {inputOpen === "password" && changeForm("password", backButton)}
      {feedback && <div>{feedback}</div>}
    </div>
  );
};
