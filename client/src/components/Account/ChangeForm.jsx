export default ({ type, button }) => {
  return (
    <>
      <form name={type} onSubmit={handleSubmit}>
        <input
          type={type === "password" ? "password" : "text"}
          placeholder={`enter new ${type}`}
          name={type}
          value={inputs[type]}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      {button}
    </>
  );
};
