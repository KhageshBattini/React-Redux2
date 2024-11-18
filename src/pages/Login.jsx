import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../redux/authentication/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };
    dispatch(loginRequestAction());
    //dispatch loading
    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => {
        //store to data
        dispatch(loginSuccessAction(res.data.token));
        console.log(res.data);
      })
      .catch((error) => {
        //store to data
        dispatch(loginFailureAction());
        console.log(error);
      });
    //second option
    // directly storing into redux store
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
