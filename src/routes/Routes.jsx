import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/Error/NotFound";
import UserProfile from "../pages/UserProfile/UserProfile";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>
    ,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('/commercial.json')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoutes>
          <EstateDetails></EstateDetails>
        </PrivateRoutes>
      },
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      },
    ]
  },
]);

export default router;