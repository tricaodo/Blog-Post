const initState = {
    email: null,
    currentUserId: null,
    initials: null,
    firstName: null,
    lastName: null,
    error: null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return { ...state, ...action.payload };
        case "SIGN_IN_FAILED":
            return { ...state, ...action.payload };
        case "SIGN_UP":
            return { ...state };
        case "SIGN_UP_FAILED":
            return { ...state, ...action.payload };
        case "FETCH_PROFILE":
            return { ...state, ...action.payload };
        case "SIGN_OUT":
            return { ...initState };
        default:
            return state;
    }
}

export default authReducer;