import React, { useState } from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dashboard from "../Dashboard/Dashboard.jsx";

describe("Dashboard Component", () => {
  it("opens the add song dashboard", () => {
    const { getByText } = render(<Dashboard />);
    // const header = getByText("Find a song");
    // expect(header).toBeInTheDocument();
  });
});
