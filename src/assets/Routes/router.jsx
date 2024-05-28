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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UsersHome from "../pages/Dashboard/UsersHome/UsersHome";


  

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
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
      // normal routes
        
        {
          path: "userHome",
          element: <UsersHome></UsersHome>
        },
        {
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },

        //  admin routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
    },
    {
      path: 'updateItem/:id',
      element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
      loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
    },

      
        {
          path: "allusers",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);