import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  UPDATE_CART,
  ADD_CART,
  REMOVE_CART,
  REMOVE_ALLCART,
  DELETE_CART,
  GET_USER,
  USER_ERROR,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  userId: localStorage.getItem("id"),
  isAuthenticated:
    localStorage.getItem("token") && localStorage.getItem("id") ? true : false,
  cart: [],
  user: null,
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
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
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
    case REMOVE_ALLCART:
      let newCart3 = state.cart;
      let remove2 = false;
      let index2 = -1;
      for (const c in newCart3) {
        if (newCart3[c].id === payload.id) {
          remove2 = true;
          index2 = c;
        }
      }
      if (remove2) {
        if (newCart3.length === 1) newCart3 = [];
        else newCart3.splice(index2, 1);
      }
      return {
        ...state,
        cart: [...newCart3],
      };
    case DELETE_CART:
      return {
        ...state,
        cart: [],
      };
    case AUTH_ERROR:
    case GET_USER:
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
        user: null,
      };
    default:
      return state;
  }
}
