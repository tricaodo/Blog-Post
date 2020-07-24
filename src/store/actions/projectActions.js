import fb from "../../config/fbConfig"
import history from "../../history";
import { ADD_PROJECT } from "../types";

export const createProject = project => dispatch => {
  const db = fb.firestore();
  const data = {
    ...project,
    createdAt: fb.firestore.Timestamp.fromDate(new Date()),
  }
  return db.collection("projects")
    .add(data)
    .then(doc => {
      dispatch({ type: ADD_PROJECT, payload: { ...data, id: doc.id } })
    })
};

export const fetchProjects = () => async dispatch => {
  const db = fb.firestore();
  const projects = [];
  await db.collection("projects")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const project = { id: doc.id, ...doc.data() };
        projects.push(project);
      });
      dispatch({ type: "FETCH_PROJECTS", payload: projects });
    })
    .catch(error => {
      dispatch({ type: "FETCH_PROJECTS_ERROR", error });
    });
}

export const fetchProject = id => async dispatch => {
  const db = fb.firestore();
  await db.collection("projects").doc(id).get().then(doc => {
    const project = { id: id, ...doc.data() };
    dispatch({ type: "FETCH_PROJECT", payload: project })
  });
}