export default ({ type, button, handler, inputs }) => {
  return (
    <>
      <form name={type} onSubmit={handler}>
        <input
          type={type === "password" ? "password" : "text"}
          placeholder={`enter new ${type}`}
          name={type}
          value={inputs[type]}
          onChange={handler}
        />
        <input type="submit" value="Submit" />
      </form>
      {button}
    </>
  );
};
