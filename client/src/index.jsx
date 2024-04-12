import { render, createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App/App.jsx";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
