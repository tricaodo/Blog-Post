import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
    class WithAuthorization extends React.Component {
        render() {
            if(!this.props.auth.isLoggined) return <Redirect to="/signin" />
            return <ChildComponent {...this.props} />
        }
    }
    const mapStateToProps = state => {
        return { auth: state.auth };
    }
    return connect(mapStateToProps)(WithAuthorization);
}