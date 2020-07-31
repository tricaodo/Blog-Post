import fb from "../../config/fbConfig"
import { FETCH_PROJECTS, IS_FETCHING } from "../types";


export const fetchProjects = () => async dispatch => {
  dispatch({ type: IS_FETCHING })
  const db = fb.firestore();
  const projects = [];
  await db.collection("projects")
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const project = { id: doc.id, ...doc.data() };
        projects.push(project);
      });
      dispatch({ type: FETCH_PROJECTS, payload: projects });
    })
    .catch(error => {
      console.log(error.message);
    });
}