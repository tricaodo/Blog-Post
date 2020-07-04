import fb from "../../config/fbConfig"

export const createProject = (project) => {
  return (dispatch) => {
    const db = fb.firestore();
    db
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Ninja",
        authorLastname: "The Net",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_PROJECT",
          payload: {
            project: project,
          },
        });
      })
      .catch((error) => {
        dispatch({ type: "ADD_PROJECT_ERROR", error });
      });
  };
};

export const fetchProjects = () => async dispatch => {
  const db = fb.firestore();
  const projects = [];
  await db.collection("projects")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        projects.push({ id: doc.id, ...doc.data() });
      });
    })
    .catch(error => {
      dispatch({ type: "FETCH_PROJECTS_ERROR", error });
    });
  dispatch({ type: "FETCH_PROJECTS", projects });
}