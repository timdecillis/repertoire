import { render, createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App.jsx";
import CreateUser from "./components/CreateUser/CreateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <img
          className="painting"
          src="https://media.istockphoto.com/id/1220009855/vector/a-young-man-playing-guitar-at-home-guitarist-musician-is-sitting-in-quarantine-alone-flat.jpg?s=612x612&w=0&k=20&c=p9bINE_TxSd4G4VRkvaHffh5vZjUdVUQvXGcqBlDrSs="
          alt="a man playing guitar with his cat"
        ></img>
      </>
    ),
    errorElement: <div>This is an error</div>,
    children: [
      {
        path: "/create",
        element: <CreateUser />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
