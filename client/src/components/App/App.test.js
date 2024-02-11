import React, { useState } from "react";
import { render, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";

describe("App Component", () => {
  it("includes the container, banner, and header", () => {
    const { getByText } = render(<App />);
    expect(document.querySelector(".container")).toBeTruthy();
    expect(document.querySelector(".banner")).toBeTruthy();
    expect(document.querySelector(".header")).toBeTruthy();
    const header = getByText("Repertoire");
    expect(header).toBeInTheDocument();
  });
  it("logs in successfully", () => {
    const { getByText } = render(<App />);
    const button = getByText("Log In");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    const songBook = getByText("Songbook");
    const addSongButton = getByText("+Add Song");
    const signOutButton = getByText("Sign Out");
    expect(songBook).toBeInTheDocument();
    expect(addSongButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });
  it("opens the create account page", () => {
    const { getByText } = render(<App />);
    const button = getByText("Create account");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    const submitButton = getByText("Submit");
    expect(submitButton).toBeInTheDocument();

  });
  it("opens the add song dashboard", () => {
    const { getByText } = render(<App />);
    const button = getByText("Log In");
    fireEvent.click(button);
    const addButton = getByText("+Add Song");
  });
});
