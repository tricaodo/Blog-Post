import { SIGN_IN, SIGN_OUT } from "../types";
const initState = {
    email: null,
    currentUserId: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, ...action.payload };
        case SIGN_OUT:
            return { ...initState };
        default:
            return state;
    }
}

export default authReducer;