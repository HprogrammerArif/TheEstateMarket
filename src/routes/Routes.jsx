import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/Error/NotFound";
import UserProfile from "../pages/UserProfile/UserProfile";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../pages/Contact/Contact";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/commercial.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/details/:id",
        //loader: ({ params }) => fetch(`commercial.json${params.id}`),
        loader: () => fetch("/commercial.json"),

        element: (
          <PrivateRoutes>
            <EstateDetails></EstateDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoutes>
          <UpdateProfile></UpdateProfile>,
        </PrivateRoutes>
      },
      {
        path: "/blogs",
        loader: () => fetch("/blogs.json"),
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
