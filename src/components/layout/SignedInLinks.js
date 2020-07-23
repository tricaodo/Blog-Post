import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/createproject">New Project</NavLink></li>
            <li><NavLink to="/" onClick={() => props.signOut()}>Log Out</NavLink></li>
            <li>
                <NavLink to="/" className="btn btn-floating pink lighten-1">
                    {props.auth.initials !== null ? props.auth.initials : null}
                </NavLink>
            </li>
        </ul>
    );
}
const mapStateToProps = state => {
    return { auth: state.auth };
}
export default connect(mapStateToProps, {
    signOut
})(SignedInLinks);