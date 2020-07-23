import fb from "../../config/fbConfig";
export const fetchNotifications = () => dispatch => {
    const db = fb.firestore();
    db.collection("notifications").orderBy("time", "desc").limit(3)
        .onSnapshot(snapshot => {
            const changes = snapshot.docChanges();
            let notifications = [];
            changes.forEach(change => {
                const notification = { id: change.doc.id, ...change.doc.data() };
                if(change.type === "added"){
                    notifications = [...notifications, notification];
                }
            });
            dispatch({ type: "FETCH_NOTIFICATIONS", payload: notifications });
        })
}