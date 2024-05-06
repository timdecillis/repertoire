import { render, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import NewApp from "./components/NewApp/NewApp.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import SongList from "./components/SongList/SongList.jsx";
import Search from "./components/Search/Search.jsx";

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
    ],
  },
  {
    path: "home",
    element: (
      <div>
        <SongList />
      </div>
    ),
    children: [
      { path: "search", element: <Dashboard/>}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
