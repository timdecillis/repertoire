import React, { useState } from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import Instrument from "./Instrument.jsx";

describe("Instrument Component", () => {
  it("renders without throwing an error", () => {
    const props = {
      signedIn: true,
      choices: [],
      dashOpen: true,
    };
    render(<Instrument {...props} />);
  });
});
