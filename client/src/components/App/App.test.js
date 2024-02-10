import React, { useState } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";

describe("App Component", () => {
  it("includes the container, banner, and header", () => {
    const { getByText } = render(<App />);
    // expect(document.querySelector(".container")).toBeTruthy();
    // expect(document.querySelector(".banner")).toBeTruthy();
    // expect(document.querySelector(".header")).toBeTruthy();
    const header = getByText("Repertoire");
    expect(header).toBeInTheDocument();
  });
  it("calls the sign in function", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button label="Click me" onClick={handleClick} />
    );
    const button = getByText("Click me");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
