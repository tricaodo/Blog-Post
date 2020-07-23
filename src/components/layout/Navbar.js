import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { fetchProfile } from "../../store/actions/authActions";
import { connect } from "react-redux";


class Navbar extends React.Component {
    state = { isLoaded: false };
    componentDidMount() {
        this.props.fetchProfile();
        this.setState({ isLoaded: true });
    }

    renderLinks = () => {
        const { auth } = this.props;
        return auth.currentUserId !== null ? <SignedInLinks /> : <SignedOutLinks />
    }

    render() {
        return (
            // <nav className="nav-wrapper grey darken-3" >
            //     <div className="container">
            //         <Link to="/" className="brand-logo">Mario Plan</Link>
            //         {this.state.isLoaded ? this.renderLinks() : null}
            //     </div>
            // </nav>
            <nav className="navbar is-transparent is-fixed-top " role="navigation" aria-label="main navigation" data-target="#myNavbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <span className="icon">
                                <i className="fa fa-home fa-lg"></i>
                            </span>
                        </a>
                        <h1 className="navbar-item has-text-weight-bold is-size-4">TRI DO</h1>
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                            data-target="navbarBurger">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>



                    <div id="navbarBurger " className="navbar-menu is-active">
                        <div className="navbar-end">
                            <a href="#home" className="navbar-item has-text-weight-medium">Home</a>
                            <a href="#about" className="navbar-item has-text-weight-medium">About</a>
                            <a href="#experience" className="navbar-item has-text-weight-medium">Experiences</a>
                            <a href="#project" className="navbar-item has-text-weight-medium">Projects</a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return { auth: state.auth };
}

export default connect(mapStateToProps, { fetchProfile })(Navbar);