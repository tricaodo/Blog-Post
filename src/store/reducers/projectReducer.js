// const initState = {
//   projects: [
//     { id: 1, title: "Learn ReactJS and Redux", content: "bla bla bla" },
//     { id: 2, title: "Washing dishes", content: "there are a lot of dishes" },
//     { id: 3, title: "Buying a gift", content: "Birthday of Jason" },
//   ],
// };
const projectReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return state;
    case "ADD_PROJECT_ERROR":
      return state;
    case "FETCH_PROJECTS":
      return [...action.projects];
    default:
      return state;
  }
};

export default projectReducer;
