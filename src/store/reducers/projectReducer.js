import { ADD_PROJECT, FETCH_PROJECTS } from "../types";
import _ from "lodash";
const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, "id") }
    case "FETCH_PROJECT":
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
};

export default projectReducer;
