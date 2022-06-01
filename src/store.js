import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { addToCartReducer, proDtailsReducer } from "./Reducer/proReducer";
import thunk from "redux-thunk";

const appReducer = combineReducers({
  proDtails: proDtailsReducer,
  addToCart: addToCartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Middleware = [thunk];
const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...Middleware))
);
export default store;
