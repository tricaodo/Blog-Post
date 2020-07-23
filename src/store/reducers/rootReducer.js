import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
  notifications: notificationReducer
});

export default rootReducer;
