import React from 'react'
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import withAuthorization from "../hoc/withAuthorization";
import Spinner from "../spinner/Spinner"
import moment from "moment"
import { fetchProjects } from "../../store/actions/projectActions";

class ManageProjects extends React.Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        if (this.props.isFetching) return <Spinner />
        const { projects } = this.props
        return (
            <React.Fragment>
                <h1 className="title">Projects</h1>
                <div className="box content">
                    {projects.map(project => (
                        <article className="media" key={project.id}>
                            <div className="media-left">
                                <figure className="image is-32x32">
                                    <img src={project.image} alt={project.image} />
                                </figure>
                            </div>
                            <div className="media-content">

                                <div className="content">

                                    <span className="has-text-weight-semibold">{project.title}  </span>
                                    <p>
                                        <span className="is-size-7 is-italic">created {moment(project.createdAt.toDate()).fromNow()} &nbsp;</span>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <span className="has-text-grey-light">
                                    <Link to={`/collaborations/${project.id}`}>
                                        <button className="button is-success is-light is-outlined is-small mr-2">Edit</button>
                                    </Link>
                                    <Link to={`/collaborations/${project.id}`}>
                                        <button className="button is-danger is-light is-outlined is-small">Delete</button>
                                    </Link>
                                </span>
                            </div>

                        </article>
                    ))
                    }
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return { auth: state.auth, projects: Object.values(state.projects), isFetching: state.isFetching };
}
export default connect(mapStateToProps, {
    fetchProjects
})(withAuthorization(ManageProjects));