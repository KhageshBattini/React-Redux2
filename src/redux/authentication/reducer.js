import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };

    default:
      return state;
  }
};
