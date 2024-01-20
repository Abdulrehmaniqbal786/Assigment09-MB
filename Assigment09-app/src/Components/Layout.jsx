import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Router_App } from "../Config/Router_App";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      
    

      <Outlet />

      
    </div>
  );
};