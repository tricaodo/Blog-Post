import React from "react";
import { connect } from "react-redux";

const withAuthorization = ChildComponent => {
    class WithAuthorization extends React.Component {
        render() {
            return <ChildComponent />
        }
    }
    const mapStateToProps = state => {
        return { auth: state.auth };
    }
    return connect(mapStateToProps)(WithAuthorization);
}

export default withAuthorization;