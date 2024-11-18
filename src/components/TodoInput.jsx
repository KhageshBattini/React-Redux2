import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postTodo,
  todoPostFailureAction,
  todoPostRequestAction,
  todoPostSuccessAction,
} from "../redux/Todo/action";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    // postTodo(title, dispatch);
    dispatch(postTodo(title));
    setTitle("");
  };

  //post
  //want to add todo to redux store
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>submit</button>
    </div>
  );
};

export default TodoInput;
