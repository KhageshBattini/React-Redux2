import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { Counter } from "../components/Counter";
import TodoList from "../components/TodoList";
import PrivateRoute from "../components/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/counter"
        element={
          <PrivateRoute>
            <Counter />
            {/* children */}
          </PrivateRoute>
        }
      />
      <Route path="/todo" element={<TodoList />} />
    </Routes>
  );
};

export default MainRoutes;
