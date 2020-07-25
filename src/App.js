import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import CreateProject from "./components/projects/CreateProject";
import history from "./history";
import ProjectList from "./components/projects/ProjectList";
import { connect } from "react-redux";
import { onAuthChanged } from "./store/actions/authActions";
import Spinner from "./components/spinner/Spinner";
import Home from "./components/dashboard/Home";
import Dashboard from "./components/projects/Dashboard";
import Blogs from "./components/projects/Blogs";
import Tabs from "./components/tabs/Tabs";
import SignOut from "./components/auth/SignOut";


class App extends Component {

  componentDidMount() {
    this.props.onAuthChanged();
  }

  render() {
    if (!this.props.auth.isResolved) return <Spinner />
    return (
      <Router history={history}>
        <div>
          <Navbar />
          {this.props.auth.isLoggined && <Tabs />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects/new" component={CreateProject} />
            <Route exact path="/projects/dashboard" component={Dashboard} />
            <Route exact path="/projects/blogs" component={Blogs} />
            <Route path="/projects" component={ProjectList} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signout" component={SignOut} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return { auth: state.auth };
}
export default connect(mapStateToProps, {
  onAuthChanged
})(App);
