import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_LOADING,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_LOADING,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "./sample.types";

const INITIAL_STATE = {
  status: "idle",
  products: [],
  isLoading: true,
  currentProduct: {
    status: "idle",
    productData: [],
    isLoading: true,
  },
};

const productsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        status: "loading",
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: "success",
        products: payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        status: "failed",
      };

    case FETCH_PRODUCT_LOADING:
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          isLoading: true,
          status: "loading",
        },
      };

    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          isLoading: false,
          status: "success",
          productData: payload,
        },
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        currentProduct: {
          ...state.currentProduct,
          isLoading: false,
          status: "failed",
        },
      };

    default:
      return state;
  }
};
export default productsReducer;
