import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";
import { Layout } from "../Components/Layout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="home" element={<Home/>} />
      <Route path="signup" element={<SignUp />} />
<Route path="login" element={<Login/>} />

    </Route>
  )
);

export const Router_App = () => {
  return <RouterProvider router={router} />;
};