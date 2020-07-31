import { FETCH_PROJECTS } from "../types";
import _ from "lodash";
const projectReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, "id") }
    default:
      return state;
  }
};

export default projectReducer;
