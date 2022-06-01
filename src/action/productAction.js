import {
  PRO_ADD_TO_CART,
  PRO_ADD_TO_CART_FAILED,
  PRO_ADD_TO_DETAILS_FAILED,
} from "../constatnt/proConstant";
import { PRO_ADD_TO_DETAILS } from "../constatnt/proConstant";

export const proDetailsAction = (data) => async (dispatch, getState) => {
  try {
    console.log("oooooooooo");
    console.log(data, "oooooooooo");
    dispatch({ type: PRO_ADD_TO_DETAILS, payload: data });
  } catch (err) {
    dispatch({ type: PRO_ADD_TO_DETAILS_FAILED, payload: err });
  }
};

export const addToCartAction = (data) => async (dispatch, getState) => {
  try {
    console.log(data);

    dispatch({ type: PRO_ADD_TO_CART, payload: data });
  } catch (err) {
    console.log(err);
    dispatch({ type: PRO_ADD_TO_CART_FAILED, payload: err });
  }
};
