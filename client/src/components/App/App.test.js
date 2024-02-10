import React, { useState } from "react";
import { render } from "@testing-library/react";

import App from "./App.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";

describe("App Component", () => {
  it("includes the container, banner, and header", () => {
    const Wrapper = () => {
      const [signedIn, setSignedIn] = useState(false);
      return <App />;
    };
    render(<Wrapper />);
    expect(document.querySelector(".foobar")).toBeTruthy();
  });
});
