import fb from "../../config/fbConfig";
export const signIn = credentials => dispatch => {
    fb.auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then((info) => {
            dispatch({ type: "SIGN_IN", payload: { email: info.user.email, currentUserId: info.user.uid } });
        })
        .catch((error) => {
            dispatch({ type: "SIGN_IN_FAILED", payload: { error: error.message } });
        });
}

export const signUp = newUser => async dispatch => {
    const res = await fb.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
    fb.firestore().collection("users").doc(res.user.uid).set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
    })
        .then(() => {
            dispatch({ type: "SIGN_UP" });
        })
        .catch(error => {
            dispatch({ type: "SIGN_UP_FAILED", payload: { error: error.message } });
        });
}

export const fetchProfile = () => dispatch => {
    fb.auth().onAuthStateChanged(user => {
        if (user !== null) {
            fb.firestore().collection("users").doc(user.uid)
                .get()
                .then(profile => {
                    const credentials = {
                        email: user.email,
                        currentUserId: user.uid,
                        initials: profile.get("initials"),
                        firstName: profile.get("firstName"),
                        lastName: profile.get("lastName"),
                    };
                    dispatch({ type: "FETCH_PROFILE", payload: credentials });
                });
        }
    })

}

export const signOut = () => dispatch => {
    fb.auth().signOut()
        .then(() => {
            dispatch({ type: "SIGN_OUT" });
        })
}