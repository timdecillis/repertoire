import React, { useState } from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
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
    const { getByText } = render(<App onClick={handleClick} />);
    const button = getByText("Log In");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    // const newThing = getByText('Account Login');
    // expect(newThing).toBeInTheDocument();
    const songBook = getByText("Songbook");
    expect(songBook).toBeInTheDocument(); // Replace with the text of the new component

  });
});
