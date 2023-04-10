import {
  ADD_CART,
  UPDATE_CART,
  REMOVE_CART,
  REMOVE_ALLCART,
  DELETE_CART,
} from "../actions/types";

//Add item
export const addCart = item => async dispatch => {
  console.log({ ...item });
  dispatch({
    type: ADD_CART,
    payload: { ...item, amount: 1 },
  });
};

//Remove item
export const removeCart = item => async dispatch => {
  dispatch({
    type: REMOVE_CART,
    payload: item,
  });
};

//Remove every amount of item
export const removeAllCart = item => async dispatch => {
  dispatch({
    type: REMOVE_ALLCART,
    payload: item,
  });
};

//Update cart
export const updateCart = cart => async dispatch => {
  dispatch({
    type: UPDATE_CART,
    payload: cart,
  });
};

//Remove every amount of item
export const deleteCart = item => async dispatch => {
  dispatch({
    type: DELETE_CART,
    payload: item,
  });
};
