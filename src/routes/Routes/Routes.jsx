import {createBrowserRouter} from "react-router-dom";
import Root from "../../root/Root/Root";
import ErrorPage from "../../error/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import AddCoffee from "../../pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../../pages/UpdateCoffee/UpdateCoffee";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
