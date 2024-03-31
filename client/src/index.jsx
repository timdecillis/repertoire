import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./components/App/App.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Header from "./components/Header/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <App />
      </div>
    ),
  },
  {
    path: "signin",
    element: (
      <div className="landing">
        <Header />
        <SignIn />
      </div>
    ),
  },
  {
    path: "songlist",
    element: (
      <div>
        <Header />
        <SongList />
      </div>
    ),
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
