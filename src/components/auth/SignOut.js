import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Spinner from "../spinner/Spinner";

const SignOut = props => {
    useEffect(() => {
        props.signOut();
        props.history.push("/");
    }, [])
    return <Spinner />
}

export default connect(null, {
    signOut
})(SignOut);