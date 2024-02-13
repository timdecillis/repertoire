import React, { useState } from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import Choices from "../Choices/Choices.jsx";

describe("Choices Component", () => {
  it("renders without throwing an error", () => {
    const props = {
      choices: [],
      dashOpen: true,
    };
    render(<Choices {...props}/>);
  });
});
