import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuthorization = ChildComponent => {
    class WithAuthorization extends React.Component {

        render() {
            if (!this.props.auth.currentUserId) return <Redirect />
            return <ChildComponent {...this.props} />
        }
    }
    const mapStateToProps = state => {
        return { auth: state.auth };
    }
    return connect(mapStateToProps)(WithAuthorization);
}

export default withAuthorization;