import axios from "axios";
import {
  GET_TODO_SUCCESS,
  POST_TODO_SUCCESS,
  TODO_FAILURE,
  TODO_REQUEST,
} from "../../actionType";

export const postTodo = (title) => (dispatch) => {
  dispatch(todoPostRequestAction()); //for loading
  const newTodo = {
    title: title,
  };
  axios
    .post("http://localhost:3000/todos", newTodo)
    .then((res) => {
      //to the store -->success
      dispatch(todoPostSuccessAction(res.data)); // to store the data in redux store
    })
    .catch((error) => {
      // to the store---> error
      dispatch(todoPostFailureAction); // for error
    });
};

export const getTodo = (dispatch) => {
  dispatch(todoRequestAction());
  axios
    .get("http://localhost:3000/todos")
    .then((res) => {
      console.log(res.data);
      //add to the store --->success
      dispatch(todoSuccessAction(res.data));
    })
    .catch((error) => {
      console.log("error:", error);
      //add to the store --> error
      dispatch(todoFailureAction());
    });
};

//todo
//GET

//loading
export const todoRequestAction = () => {
  return { type: TODO_REQUEST };
};

export const todoSuccessAction = (payload) => {
  return { type: GET_TODO_SUCCESS, payload: payload };
};

export const todoFailureAction = () => {
  return { type: TODO_FAILURE };
};

//post

//loading

export const todoPostRequestAction = () => {
  return { type: TODO_REQUEST };
};

export const todoPostSuccessAction = (payload) => {
  return { type: POST_TODO_SUCCESS, payload };
};

export const todoPostFailureAction = () => {
  return { type: TODO_FAILURE };
};
