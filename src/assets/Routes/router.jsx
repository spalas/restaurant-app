import {
    createBrowserRouter,
   
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Main/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Sheared/Secret/Secret";
import Cart from "../pages/Dashboard/Cart";
import Dashboard from "../Layout/Dashboard";
  

  export const router = createBrowserRouter([
    {
      path: "/",
          element: <Main></Main>,
          children: [
              {
                  path: "/",
                  element: <Home></Home>
            },
            {
              path: "menu",
              element: <Menu></Menu>
            },
            {
              path: "order/:category",
              element: <Order></Order>
            },
            {
              path: "login",
              element: <Login></Login>
            },
            {
              path: "signup",
              element: <SignUp></SignUp>
            },
            {
              path: "secret",
              element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
        }
      ]
    }
  ]);