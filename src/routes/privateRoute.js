import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  // const token = localStorage.getItem("token");
  // return token ? <Component /> : <Navigate to="/" />;
  const isAuthenticated = useSelector((state) => state.auth.user !== null);
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
