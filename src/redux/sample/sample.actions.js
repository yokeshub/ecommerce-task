import axios from "axios";
import {
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_LOADING,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./sample.types";
export const getProducts = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_PRODUCTS_LOADING,
  });
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_PRODUCTS_FAILURE });
    });
};
export const getProduct = (productId) => (dispatch, getState) => {
  dispatch({
    type: FETCH_PRODUCT_LOADING,
  });
  return axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_PRODUCT_FAILURE });
    });
};
