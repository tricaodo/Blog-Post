import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { fetchProjects } from "../../store/actions/projectActions";
import { fetchNotifications } from "../../store/actions/notificationActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
    this.props.fetchProjects();
  }
  render() {
    return (
      <section id="home" class="section mt-6 scrollspy" style={{paddingTop: "200px", height: "900px"}}>
        <div class="container">
          <div class="columns">
            <div class="column">
              <div class="columns">
                <div class="tile is-parent ">
                  <div class="tile is-child box">
                    <p class="has-text-grey">Hey There</p>
                    <p class="title has-text-grey-dark">I AM TRI DO</p>
                    <p class="subtitle has-text-grey">
                      I'm currently majoring in Computer Science.
                                </p>
                    <p class="is-size-7 has-text-grey-dark mb-2"><i
                      class="fa fa-envelope mr-3"></i>trido1903@gmail.com</p>
                    <p class="is-size-7 has-text-grey-dark mb-2"><i
                      class="fa fa-phone mr-3"></i>(408)-796-9408
                                </p>
                    <p class="is-size-7 has-text-grey-dark mb-4"><i class="fa fa-map-marker mr-3"></i>San
                                    Jose,
                                    California</p>
                    <a href="#"><i class="has-text-grey-dark is-size-5 fa fa-github mr-3"></i></a>
                    <a href="#"><i class="has-text-grey-dark is-size-5 fa fa-linkedin mr-3"></i></a>
                  </div>
                </div>
              </div>

              <div class="columns">
                <div class="tile is-parent ">
                  <div class="tile is-child box">
                    <p class="title has-text-grey-dark">Education</p>
                    <p class="subtitle has-text-grey is-italic mb-1">
                      Bachelor of Science in Computer Science.
                                </p>
                    <p class="is-size-7"><span class="has-text-weight-bold">San Jose State University
                                    </span>,
                                    Santa Clara, California (2019 - 2021)</p>
                    <p class="is-size-7 is-italic has-text-weight-bold mb-1">GPA: 3.85/4.0</p>
                    <p class="is-size-7"><span class="has-text-weight-bold">Mission College</span>, Santa
                                    Clara, California
                                    (2017 - 2019)</p>
                    <p class="is-size-7 is-italic has-text-weight-bold">GPA: 3.9/4.0</p>
                  </div>
                </div>
              </div>



            </div>
            <div class="column">
              <img src={`process.env.PUBLIC_URL` + "img/banner3.png"} style={{width: "70%"}} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { projects: Object.values(state.projects), notifications: state.notifications };
};

export default connect(mapStateToProps, {
  fetchProjects,
  fetchNotifications
})(Dashboard);
