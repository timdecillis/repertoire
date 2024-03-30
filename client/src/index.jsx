import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


// import { render, createRoot } from "react-dom/client";
// import React from "react";
// import App from "./components/App/App.jsx";
// import { BrowserRouter } from "react-router-dom";

// const domNode = document.getElementById("root");
// const root = createRoot(domNode);
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
