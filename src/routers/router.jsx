import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Singlebook from "../Shop/Singlebook";
import Dashboard from "../Dashboard/Dashboard";
import Dashboardlayout from "../Dashboard/Dashboardlayout";
import Uploadbook from "../Dashboard/Uploadbook";
import Managebook from "../Dashboard/Managebook";
import Editbook from "../Dashboard/Editbook";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import Logout from "../Components/Logout";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/Shop',
          element: <Shop/>
        },
        {
          path: '/About',
          element: <About/>
        },
        {
          path: '/Blog',
          element: <Blog/>
        },
        {
          path: '/book/:id',
          element: <Singlebook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <Dashboardlayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <Uploadbook/>
        },
        {
          path: "/admin/dashboard/manage",
          element: <Managebook/>
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <Editbook/>,
          loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
      ]
    },
    {
      path: "sign-up",
      element: <SignUp/>
    },
    {
      path: "login",
      element: <Login/>
    },
    {
      path: "logout",
      element:  <Logout />
    }
  ]);
  export default router;