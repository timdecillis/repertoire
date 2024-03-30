import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <LandingPage />
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
