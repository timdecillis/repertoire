import React, { useState } from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import Search from './Search.jsx';

describe("Search Component", () => {
  it("renders without throwing an error", () => {
    const props = {
      signedIn: true,
      choices: [],
      dashOpen: true,
    };
    render(<Search {...props} />);
  });
});
