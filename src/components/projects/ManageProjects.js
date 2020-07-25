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
            <section className="section" style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="columns is-mobile is-centered is-multiline">
                        <div className="column is-two-thirds">
                            <h1 className="title">Collaborations</h1>
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
                                                    <span className="is-size-7 is-italic">replied {moment(project.createdAt.toDate()).fromNow()} &nbsp;</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <span className="has-text-grey-light">
                                                <Link to={`/collaborations/${project.id}`}>
                                                    <button className="button is-primary is-light is-outlined">Enter</button>
                                                </Link>
                                            </span>
                                        </div>

                                    </article>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return { auth: state.auth, projects: Object.values(state.projects), isFetching: state.isFetching };
}
export default connect(mapStateToProps, {
    fetchProjects
})(withAuthorization(ManageProjects));