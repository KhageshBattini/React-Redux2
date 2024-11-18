import React from "react";
import Login from "../pages/Login";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  return auth ? children : <Login />;
};
export default PrivateRoute;
