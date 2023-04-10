import { ADD_CART, UPDATE_CART, REMOVE_CART } from "../actions/types";

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

//Update cart
export const updateCart = cart => async dispatch => {
  dispatch({
    type: UPDATE_CART,
    payload: cart,
  });
};
