export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_NOTIFICATIONS":
            return [...action.payload]

        default:
            return state;
    }
} 