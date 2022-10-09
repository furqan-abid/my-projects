import axios from "axios";
import * as ActionTypes from "./ActionTypes";

//Action creators for products

//get all products

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.ALL_PRODUCT_REQUEST });
    const data = await axios.get("/products");
    dispatch({
      type: ActionTypes.ALL_PRODUCT_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

//get single product detail

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.PRODUCT_DETAILS_REQUEST });

    const data = await axios(`/products/${id}`);
    console.log(data.data)
    dispatch({ type: ActionTypes.PRODUCT_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: ActionTypes.PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAR_ERRORS,
  });
};
