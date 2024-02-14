import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Colleges from "../Pages/Colleges/Colleges";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Admission from "../Pages/Admission/Admission";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import GetAdmission from "../Pages/Admission/GetAdmission";
import MyCollege from "../Pages/MyCollege/MyCollege";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "colleges",
        element: <Colleges />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "admission-form",
        element: (
          <PrivateRoute>
            <AdmissionForm />
          </PrivateRoute>
        ),
        // loader: ({params})=> fetch(`http://localhost:5000/college/${params._Id}/admissions-form`)
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "/college/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails />
          </PrivateRoute>
        ),
        loader:({params}) =>
          fetch(`http://localhost:5000/college/${params.id}`),
      },
      {
        path: "/get-admission/:id",
        element:(
          <PrivateRoute>
            <GetAdmission/>
          </PrivateRoute>
        ),
        loader: ({params})=>
        fetch(`http://localhost:5000/admission/${params.id}`)
      },
      {
        path: "my-college",
        element: (
          <PrivateRoute>
            <MyCollege/>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
