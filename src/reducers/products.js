import {
  GET_PRODUCTS,
  PRODUCTS_ERROR,
  GET_PRODUCT,
  PRODUCT_ERROR,
  GET_CATEGORIES,
  CATEGORIES_ERROR,
} from "../actions/types";

const initialState = {
  products: [],
  product: null,
  categories: null,
};

export default function AUTH(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORIES_ERROR:
    case PRODUCT_ERROR:
    case PRODUCTS_ERROR:
      return state;
    default:
      return state;
  }
}
