import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import CreateProject from "./components/projects/CreateProject";
import history from "./history";
import ProjectList from "./components/projects/ProjectList";
import ManageProjects from "./components/projects/ManageProjects";

function App() {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects/new" component={CreateProject} />
          <Route exact path="/projects/manage" component={ManageProjects} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
