import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actionType";

export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
export const loginFailureAction = () => {
  return { type: LOGIN_FAILURE };
};
export const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};
