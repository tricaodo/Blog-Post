import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import history from "./history";
import ProjectList from "./components/projects/ProjectList";
import Home from "./components/dashboard/Home";


class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={ProjectList} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
