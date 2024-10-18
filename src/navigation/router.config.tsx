import React from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
// import { useApp } from "../appContext"
import { SignUp } from "../screens/signup";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Login } from "../screens/login";
import { Dashboard } from "../screens/dashbord";
import { UserForm } from "../screens/user_form";
import CardGrid from "../screens/cards";
import CreateDependent from "../screens/dependents";
// import { Home } from "../App";
// const SignUp = React.lazy(() => import("../screens/signup"))

const router = createHashRouter([
  {
    path: "/",
    errorElement: <></>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/userform",
        element: <UserForm />,
      },
      {
        path: "/cards",
        element: <CardGrid />,
      },
      {
        path: "/create-dep",
        element: <CreateDependent />,
      },
    ],
  },
]);

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  link: {
    marginTop: "1rem",
  },
}));

const RouterConfig: React.FC = () => {
  const classes = useStyles();
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Container className={classes.mainContainer}>
    //     <Routes>
    //       {/* <Route path="/" element={<Home />} /> */}
    //       <Route path="/" element={<Login />} />
    //       <Route path="/signup" element={<SignUp />} />
    //     </Routes>
    //   </Container>
    // </BrowserRouter>
  );
};
export default RouterConfig;
