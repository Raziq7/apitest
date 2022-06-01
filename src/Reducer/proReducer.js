import {
  PRO_ADD_TO_CART,
  PRO_ADD_TO_CART_FAILED,
  PRO_ADD_TO_DETAILS_FAILED,
} from "../constatnt/proConstant";
import { PRO_ADD_TO_DETAILS } from "../constatnt/proConstant";

export const proDtailsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRO_ADD_TO_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case PRO_ADD_TO_DETAILS:
      return {
        loading: false,
        Details: action.payload,
      };
    default:
      return state;
  }
};

export const addToCartReducer = (state = {}, action) => {
  switch (action.type) {
    case PRO_ADD_TO_CART_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case PRO_ADD_TO_CART:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    default:
      return state;
  }
};
