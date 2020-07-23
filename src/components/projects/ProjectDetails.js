import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { fetchProject } from "../../store/actions/projectActions";

class ProjectDetails extends React.Component {
  componentDidMount() {

    const id = this.props.match.params.id;
    this.props.fetchProject(id);
  }
  render() {
    if (!this.props.project) return <div></div>
    const { project } = this.props;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>
              {project.content}
            </p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {

  return { project: state.projects[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {
  fetchProject
})(ProjectDetails);
