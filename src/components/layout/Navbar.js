/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar is-transparent is-fixed-top " role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="navbar-item" to="/">
                            <span className="icon">
                                <i className="fa fa-home fa-lg"></i>
                            </span>
                            <h1 className="navbar-item has-text-weight-bold is-size-4">TRI DO</h1>
                        </Link>
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                            data-target="navbarBurger">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBurger" className="navbar-menu is-active">
                        <div className="navbar-end">
                            <Link to="/" className="navbar-item has-text-weight-medium">Home</Link>
                            <Link to="/projects" className="navbar-item has-text-weight-medium">Projects</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default connect(null, {
})(Navbar);