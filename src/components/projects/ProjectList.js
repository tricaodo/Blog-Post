import React from "react";
import { connect } from 'react-redux';
import { fetchProjects } from "../../store/actions/projectActions";
import Spinner from "../spinner/Spinner";

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderProjectList() {
    return this.props.projects.map(project => {
      return (
        <div key={project.id} className="column is-one-fifth">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={project.image} alt={project.title} />
              </figure>
            </div>

            <div className="content is-size-5 has-text-weight-medium has-text-centered card-title">
              {project.title}
            </div>
            <div className="card-content is-size-7">
              <div className="content">
                {project.description}
                <p className="is-italic"><span className="has-text-weight-bold">Technologies: </span>{this.renderTechnologies(project.technologies)}</p>
              </div>
            </div>
            {
              <div className="card-footer">
                <div className="card-footer-item media">
                  <a href={project.link} target="_blank" className="is-size-7 is-primary">Learn More</a >
                </div>
              </div>
            }
          </div>
        </div>
      )
    })
  }

  renderTechnologies = (technologies) => {

    let string = "";
    for(let i = 0; i < technologies.length; i++){
      string += technologies[i];
      if(i + 1 < technologies.length){
        string += ", "
      }
    }
    return string;
  }

  render() {
    if (this.props.isFetching) return <Spinner />
    return (
      <section className="section section-padding-top">
        <div className="container">
          <h1 className="title"><i className="fa fa-tasks"></i> My Project</h1>
          <div className="columns is-multiline">
            {this.renderProjectList()}
          </div>
        </div>
      </section>
    )
  }
}
const mapStateToProps = state => {
  return { projects: Object.values(state.projects), isFetching: state.isFetching };
}
export default connect(mapStateToProps, {
  fetchProjects
})(ProjectList);