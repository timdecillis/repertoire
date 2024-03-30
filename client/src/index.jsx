import { render, createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App/App.jsx";
import { RouterProvider, createRouterProvider } from "react-router-dom";

const router = createrBrowserRouter([{ path: "/", element: App }]);

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<RouterProvider router={router} />);
