import { render, createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App/App.jsx";
import { BrowserRouter } from "react-router-dom";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
