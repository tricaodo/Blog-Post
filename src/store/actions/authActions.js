import fb from "../../config/fbConfig";
import { SIGN_IN, SIGN_OUT, ON_AUTH_CHANGED } from "../types";
export const signIn = credentials => dispatch =>
    fb.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((info) => {
            dispatch({ type: SIGN_IN, payload: { email: info.user.email, currentUserId: info.user.uid } });
        })

export const onAuthChanged = () => dispatch =>
    fb.auth()
        .onAuthStateChanged(user => {
            if (user) {
                dispatch({ type: ON_AUTH_CHANGED, payload: { email: user.email, currentUserId: user.uid } });
            } else {
                dispatch({ type: SIGN_OUT });
            }
        }, error => {
            console.log(error.message);
        })



export const signOut = () => dispatch => {
    fb.auth().signOut()
        .then(() => {
            dispatch({ type: SIGN_OUT });
        })
}