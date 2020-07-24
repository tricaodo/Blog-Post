import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { fetchProjects } from "../../store/actions/projectActions";
import { fetchNotifications } from "../../store/actions/notificationActions";
import Hero from "./Hero";
import About from "./About";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
    this.props.fetchProjects();
  }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <About />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { projects: Object.values(state.projects), notifications: state.notifications };
};

export default connect(mapStateToProps, {
  fetchProjects,
  fetchNotifications
})(Dashboard);
