import { SIGN_IN, SIGN_OUT, ON_AUTH_CHANGED } from "../types";
const initState = {
    email: null,
    currentUserId: null,
    isResolved: false,
    isLoggined: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, ...action.payload, isLoggined: true, isResolved: true };
        case SIGN_OUT:
            return { ...initState, isResolved: true };
        case ON_AUTH_CHANGED:
            return { ...state, ...action.payload, isLoggined: true, isResolved: true };
        default:
            return state;
    }
}

export default authReducer;