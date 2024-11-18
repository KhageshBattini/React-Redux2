import { ADD, SUB } from "../../actionType";
import { loadData, saveData } from "../../utils/accessLocalStorage";

const initialState = {
  counter: loadData("counter") || 10,
};

export const reducerFunction = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      saveData("counter", state.counter + payload);
      return { ...state, counter: state.counter + payload };
    case SUB:
      saveData("counter", state.counter - payload);
      return { ...state, counter: state.counter - payload };

    default:
      return state;
  }
};
