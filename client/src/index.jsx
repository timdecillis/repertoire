import { createContext } from "react";
import { render, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CreateUser from "./components/CreateUser/CreateUser.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import NewApp from "./components/NewApp/NewApp.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import SongList from "./components/SongList/SongList.jsx";
import { DataContext, DataProvider } from "./context.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NewApp />
      </>
    ),
    errorElement: <div>This is an error</div>,
    children: [
      { index: true, element: <SignIn /> },
      { path: "create", element: <CreateUser /> },
      {
        path: "home",
        element: <SongList />,
        children: [{ path: "search", element: <Dashboard /> }],
      }
    ],
  }

]);

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
);
