import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
    class WithGuest extends React.Component {
        render() {
            if (this.props.auth.isLoggined) return <Redirect to="/projects/dashboard" />
            return <ChildComponent {...this.props} />
        }
    }
    const mapStateToProps = state => {
        return { auth: state.auth };
    }
    return connect(mapStateToProps)(WithGuest);
}
