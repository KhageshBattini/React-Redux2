import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodo,
  todoFailureAction,
  todoRequestAction,
  todoSuccessAction,
} from "../redux/Todo/action";
import TodoInput from "./TodoInput";

const TodoList = () => {
  // first time --> the fetched data will be coming from db.json and added to store.
  // new todo item will get updated from store.
  //todoIItem, loading, error

  const { todo, isLoading, isError } = useSelector(
    (store) => store.TodoReducer
  );
  console.log(todo);
  //   const loading = useSelector((store) => store.isLoading);
  //   const error = useSelector((store) => store.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    // getTodo(dispatch);
    dispatch(getTodo); // actionObject
  }, []);
  return (
    <div>
      <h1>Todos</h1>
      {isLoading && <h1>Loading....</h1>}
      {isError && <h1>Error....</h1>}
      <TodoInput />
      {todo.map((element) => {
        return <div key={element.id}>{element.title}</div>;
      })}
    </div>
  );
};

export default TodoList;
