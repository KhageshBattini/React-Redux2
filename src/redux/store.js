import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducerFunction as CounterReducer } from "./Counter/reducer";
import { reducerFunction as TodoReducer } from "./Todo/reducer";
import { reducer as AuthReducer } from "./authentication/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  CounterReducer,
  TodoReducer,
  AuthReducer,
});

const logger = (store) => (dispatch) => (action) => {
  // console.log(a); //store
  // console.log(b); //dispatch
  // console.log(c); //action object

  //  dispatch(getTodo) to getTodo(dispatch);

  if (typeof action === "function") {
    return action(dispatch);
  } else {
    return dispatch(action);
  }
};

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// useReducer(function, initialValue)

// applyMiddleware
// application <--Middleware--> store

// function curring
// function(a,b,c){
//   return a+b+c;
// }

// function logger(a){
//   return function(b){
//     return function(c){
//       return a+b+c
//     }
//   }
// }

// const logger =(a)=>(b)=>(c)=>a+b+c;

// logger(a)(b)(c)--->
