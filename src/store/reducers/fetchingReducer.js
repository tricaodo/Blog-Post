import { IS_FETCHING, FETCH_PROJECTS } from "../types";
export default (state = false, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return true;
        case FETCH_PROJECTS:
            return false;
        default:
            return state;
    }
}