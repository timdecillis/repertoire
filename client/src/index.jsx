import { render, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import App from "./components/App/App.jsx";
import CreateUser from "./components/CreateUser/CreateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>This is an error</div>,
    children: [
      {
        path: "create",
        element: <CreateUser/>
      }
    ]
  },
  {
    path: "create",
    element: <CreateUser/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
