import React, { useState } from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dashboard from "../Dashboard/Dashboard.jsx";

describe("Dashboard Component", () => {
  it("renders without throwing an error", () => {
    render(<Dashboard />);
    // debug();
    // const header = getByText("Find a song");
    // expect(header).toBeInTheDocument();
  });
});
