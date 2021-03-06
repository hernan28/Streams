import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";
import authReducer from "./authReducers";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});
