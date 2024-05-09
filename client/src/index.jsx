import { createContext, useState } from "react";
import { render, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateUser from "./components/CreateUser/CreateUser.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import NewApp from "./components/NewApp/NewApp.jsx";
import Dashboard, {
  loader as dashLoader,
} from "./components/Dashboard/Dashboard.jsx";
import SongList, {
  loader as songlistLoader,
} from "./components/SongList/SongList.jsx";
import Search from "./components/Search/Search.jsx";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [dupe, setDupe] = useState(false);

  return (
    <DataContext.Provider value={{ dupe, setDupe }}>
      {children}
    </DataContext.Provider>
  );
};

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
    path: "home/:email/:password",
    element: <SongList />,
    loader: songlistLoader,
    children: [{ path: "search", element: <Dashboard />, loader: dashLoader }],
  },
]);

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>
);
