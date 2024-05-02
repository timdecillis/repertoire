import { render, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import App from "./components/App/App.jsx";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
