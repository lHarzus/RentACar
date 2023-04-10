import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  UPDATE_CART,
  ADD_CART,
  REMOVE_CART,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  userId: localStorage.getItem("id"),
  isAuthenticated:
    localStorage.getItem("token") && localStorage.getItem("id") ? true : false,
  cart: [],
};

export default function AUTH(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      localStorage.setItem("id", payload);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        userId: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case ADD_CART:
      const newCart = state.cart;
      let changed = false;
      for (const c in newCart) {
        if (newCart[c].id === payload.id) {
          newCart[c].amount++;
          changed = true;
        }
      }
      if (changed) {
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      }
    case REMOVE_CART:
      let newCart2 = state.cart;
      let remove = false;
      let index = -1;
      for (const c in newCart2) {
        if (newCart2[c].id === payload.id) {
          if (newCart2[c].amount === 1) {
            remove = true;
            index = c;
          } else newCart2[c].amount--;
        }
      }
      if (remove) {
        if (newCart2.length === 1) newCart2 = [];
        else newCart2.splice(index, 1);
      }
      return {
        ...state,
        cart: [...newCart2],
      };
    case UPDATE_CART:
      return {
        ...state,
        cart: payload,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        userId: null,
        cart: [],
      };
    default:
      return state;
  }
}
