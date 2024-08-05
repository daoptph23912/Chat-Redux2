import * as types from "../constants/constantsAuth";
import apiRoute from "../../helpers/api";

const authAction = {
  login: (userDataLogin) => async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    try {
      const res = await apiRoute.login(userDataLogin);
      dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.data.token);
    } catch (error) {
      dispatch({
        type: types.LOGIN_FAILURE,
        payload: error.response.data.message,
      });
    }
  },
  register: (userData) => async (dispatch) => {
    dispatch({ type: types.REGISTER_REQUEST });
    try {
      const res = await apiRoute.register(userData);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
      localStorage.setItem("token", res.data.data.token);
    } catch (error) {
      dispatch({
        type: types.REGISTER_FAILURE,
        payload: error.response.data.message,
      });
    }
  },
  logout: () => {
    return (dispatch) => {
      dispatch({ type: types.LOGOUT });
      localStorage.removeItem("token");
    };
  },
};
export default authAction;
