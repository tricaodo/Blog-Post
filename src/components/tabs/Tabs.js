import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
    state = {
        activeLink: "dashboard"
    }
    handleLink = e => {
        this.setState({ activeLink: e.target.id })
    }
    render() {
        return (
            <section className="section tabs is-centered pb-0" style={{ marginTop: "100px" }}>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/projects/dashboard"
                                id="dashboard"
                                onClick={(e) => { this.handleLink(e) }}
                                className={`${this.state.activeLink === "dashboard" ? "is-active has-text-link" : ""} `}
                            >
                                Dashboard
                                </Link>
                        </li>
                        <li>
                            <Link to="/projects/new"
                                id="create"
                                onClick={(e) => { this.handleLink(e) }}
                                className={`${this.state.activeLink === "create" ? "is-active has-text-link" : ""} `}
                            >
                                Create Project
                                </Link>
                        </li>
                        <li>
                            <Link to="/projects/blogs"
                                id="blogs"
                                onClick={(e) => { this.handleLink(e) }}
                                className={`${this.state.activeLink === "blogs" ? "is-active has-text-link" : ""} `}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects/dashboard"
                                id="story"
                                onClick={(e) => { this.handleLink(e) }}
                                className={`${this.state.activeLink === "story" ? "is-active has-text-link" : ""} `}
                            >
                                Story
                            </Link>
                        </li>
                        <li>
                            <Link to="/signout">
                                Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Menu;