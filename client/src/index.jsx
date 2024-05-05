import { render, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App.jsx";
import CreateUser from "./components/CreateUser/CreateUser.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import Header from "./components/Header/Header.jsx";
import NewApp from "./components/NewApp/NewApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NewApp />
      </>
    ),
    errorElement: <div>This is an error</div>,
    children: [{ index: true, element: <SignIn /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
