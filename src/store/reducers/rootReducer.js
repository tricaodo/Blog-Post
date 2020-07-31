import projectReducer from "./projectReducer";
import fetchingReducer from "./fetchingReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  projects: projectReducer,
  isFetching: fetchingReducer
});

export default rootReducer;
