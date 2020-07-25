import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import fetchingReducer from "./fetchingReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
  isFetching: fetchingReducer
});

export default rootReducer;
