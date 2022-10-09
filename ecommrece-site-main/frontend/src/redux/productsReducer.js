import * as ActionTypes from "./ActionTypes";

export const productReducer = (
  state = {
    loading: true,
    error: null,
    product: null,
    productCount: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        product: null,
        productCount: null,
      };
    case ActionTypes.ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: action.payload.product,
        productCount: action.payload.productCount,
      };
    case ActionTypes.ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        product: null,
        productCount: null,
      };
    case ActionTypes.CLEAR_ERRORS:
        return{
            ...state,
            error:null
        }
    default:
      return state;
  }
};


export const productDetailReducer = (
  state = {
    loading: true,
    error: null,
    product: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        product: null
      };
    case ActionTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        product: action.payload.product
      };
    case ActionTypes.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        product: null
      };
    case ActionTypes.CLEAR_ERRORS:
        return{
            ...state,
            error:null
        }
    default:
      return state;
  }
};
