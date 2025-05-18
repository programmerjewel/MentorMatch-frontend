import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ErrorPage from "../pages/ErrorPage";
import FindTutors from "../pages/FindTutors";
import AddTutor from "../pages/AddTutor";

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
        path: '/find-tutors',
        element:<FindTutors/>
      },
      {
        path: '/add-tutor',
        element:<AddTutor/>
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