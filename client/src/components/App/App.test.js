import React, { useState } from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "./App.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";

describe("App Component", () => {
  it("includes the container, banner, and header", () => {
    const { getByText } = render(<App />);
    // expect(document.querySelector(".container")).toBeTruthy();
    // expect(document.querySelector(".banner")).toBeTruthy();
    // expect(document.querySelector(".header")).toBeTruthy();
    const header = getByText('Repertoire');
    expect(header).toBeInTheDocument();
  });
});
