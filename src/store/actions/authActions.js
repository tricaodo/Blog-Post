import fb from "../../config/fbConfig";
import { SIGN_IN, SIGN_OUT } from "../types";
export const signIn = credentials => dispatch =>
    fb.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((info) => {
            dispatch({ type: SIGN_IN, payload: { email: info.user.email, currentUserId: info.user.uid } });
        })


export const signOut = () => dispatch => {
    fb.auth().signOut()
        .then(() => {
            dispatch({ type: SIGN_OUT });
        })
}