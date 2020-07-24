import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import CreateProject from "./components/projects/CreateProject";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/projects/new" component={CreateProject} />
          <Route path="/projects" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
