import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
});

export default rootReducer;
