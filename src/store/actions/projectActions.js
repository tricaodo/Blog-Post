export const createProject = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    firestore
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
