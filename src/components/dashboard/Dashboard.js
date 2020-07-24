import React, { Component } from "react";
import { connect } from "react-redux";
import Hero from "./Hero";
import About from "./About";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <About />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { projects: Object.values(state.projects) };
};

export default connect(mapStateToProps)(Dashboard);
