import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
    	{
        path: '/',
        element: <Home/>, 
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      }
    ]
  }
]);


export default router;