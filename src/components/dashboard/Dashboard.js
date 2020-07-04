import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import {fetchProjects} from "../../store/actions/projectActions";

class Dashboard extends Component {
  componentDidMount(){
    this.props.fetchProjects();
  }
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={this.props.projects} />
          </div>

          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {projects: state.projects};
};

export default connect(mapStateToProps,{
  fetchProjects
})(Dashboard);
