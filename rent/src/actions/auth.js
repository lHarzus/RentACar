import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "../actions/types";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";

//Load user
export const loadUser = (username, password) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("https://fakestoreapi.com/users");
    const user = res.data.filter(
      acc => acc.username === username && acc.password === password
    )[0];
    dispatch({
      type: USER_LOADED,
      payload: user.id,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Login user
export const login = (username, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(
      "https://fakestoreapi.com/auth/login",
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser(username, password));
  } catch (err) {
    const errors = err.response.data;
    if (errors) {
      //errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
      dispatch(setAlert(errors, "danger"));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Logout / Clear profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
