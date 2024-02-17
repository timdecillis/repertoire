import React, { useState } from "react";

const Error = ({ error }) => {
  return (
    <div
      className="error"
      style={{
        textAlign: "center",
        color: "red",
        cursor: "pointer",
      }}
    >
      Please enter your {error}
    </div>
  );
};

export default Error;
