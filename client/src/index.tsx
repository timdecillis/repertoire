import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import React from "react";
import App from "./components/App/App";

const domNode = document.getElementById("root")!;
const root = createRoot(domNode);
root.render(<App />);
