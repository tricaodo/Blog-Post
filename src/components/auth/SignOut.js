import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import Spinner from "../spinner/Spinner";

class SignOut extends React.Component {
    componentDidMount() {
        this.props.signOut();
        this.props.history.push("/");
    }
    render() {
        return <Spinner />
    }
}

export default connect(null, {
    signOut
})(SignOut);