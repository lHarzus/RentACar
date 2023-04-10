import axios from "axios";
import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_PRODUCT,
  PRODUCT_ERROR,
  GET_CATEGORIES,
  CATEGORIES_ERROR,
} from "../actions/types";

//Get all Products
export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
    });
  }
};

//Get single product
export const getProduct = id => async dispatch => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
    });
  }
};

//Get all Categories
export const getCategories = () => async dispatch => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/categories");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIES_ERROR,
    });
  }
};
